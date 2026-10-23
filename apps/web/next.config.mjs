/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The browser only ever talks to port 5100. /api/* is proxied to the
  // price API (4000) so the PWA works on a phone over LAN and the service
  // worker can cache responses same-origin.
  async rewrites() {
    const target = process.env.API_ORIGIN ?? "http://127.0.0.1:4000";
    return [{ source: "/api/:path*", destination: `${target}/v1/:path*` }];
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
