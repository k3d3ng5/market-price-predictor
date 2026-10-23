/**
 * Generates the PWA PNG icons from the same shapes as public/icon.svg.
 * No image libraries: a tiny zlib + PNG encoder keeps the install step free.
 *
 * Run: node apps/web/scripts/make-icons.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public");
const BASE = 512;
const SS = 4; // supersampling per axis

const COLORS = {
  green: [0x00, 0x59, 0x2b],
  greenDark: [0x00, 0x59, 0x20],
  orange: [0xfe, 0x93, 0x2c],
  cream: [0xff, 0xdc, 0xc3],
  leaf: [0x73, 0xdc, 0x82],
  leafLight: [0x8f, 0xfa, 0x9b],
};

function inEllipse(x, y, cx, cy, rx, ry) {
  const dx = (x - cx) / rx;
  const dy = (y - cy) / ry;
  return dx * dx + dy * dy <= 1;
}

function blend(a, b, amount) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * amount),
    Math.round(a[1] + (b[1] - a[1]) * amount),
    Math.round(a[2] + (b[2] - a[2]) * amount),
  ];
}

function sample(x, y) {
  let color = COLORS.green;

  if (inEllipse(x, y, 256, 292, 136, 136)) color = COLORS.orange;
  if (inEllipse(x, y, 214, 252, 46, 30)) color = blend(color, COLORS.cream, 0.55);
  if (x > 246 && x < 266 && y > 116 && y < 186) color = COLORS.greenDark;
  if (inEllipse(x, y, 204, 158, 58, 26)) color = COLORS.leaf;
  if (inEllipse(x, y, 308, 158, 58, 26)) color = COLORS.leafLight;

  return color;
}

function render(size) {
  const rgba = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = ((px + (sx + 0.5) / SS) * BASE) / size;
          const y = ((py + (sy + 0.5) / SS) * BASE) / size;
          const color = sample(x, y);
          r += color[0];
          g += color[1];
          b += color[2];
        }
      }
      const samples = SS * SS;
      const offset = (py * size + px) * 4;
      rgba[offset] = Math.round(r / samples);
      rgba[offset + 1] = Math.round(g / samples);
      rgba[offset + 2] = Math.round(b / samples);
      rgba[offset + 3] = 255;
    }
  }
  return rgba;
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const name = Buffer.from(type, "ascii");
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([name, data])), 0);
  return Buffer.concat([length, name, data, checksum]);
}

function encodePng(width, height, rgba) {
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

for (const size of [192, 512]) {
  const png = encodePng(size, size, render(size));
  const target = join(publicDir, `icon-${size}.png`);
  writeFileSync(target, png);
  console.log(`wrote ${target} (${png.length} bytes)`);
}
