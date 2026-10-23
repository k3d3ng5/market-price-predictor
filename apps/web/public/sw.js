/*
 * Tomionce service worker.
 *
 * Cache strategy is deliberately simple and honest:
 * - app pages: network first, cached copy as fallback, /offline as last resort
 * - /api responses: network first, cached response as fallback
 * - static assets + fonts: cache first
 *
 * There is no background "freshness" magic: cached prices keep the observation
 * dates the API returned. The UI labels them as last synced, never live.
 */
const VERSION = "tomionce-v1";
const SHELL_CACHE = `tomionce-shell-${VERSION}`;
const RUNTIME_CACHE = `tomionce-runtime-${VERSION}`;

const SHELL = [
  "/",
  "/forecast",
  "/compare",
  "/sources",
  "/offline",
  "/manifest.webmanifest",
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await Promise.allSettled(
        SHELL.map((url) => cache.add(new Request(url, { cache: "reload" }))),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== SHELL_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

async function networkFirstPage(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    const offline = await caches.match("/offline");
    if (offline) return offline;
    return new Response("You are offline and this page has not been cached.", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

async function networkFirstApi(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(
      JSON.stringify({
        error: "offline_no_cache",
        detail:
          "This request has not been cached on this device. Reconnect and try again — no price was guessed.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  if (url.origin === self.location.origin) {
    if (url.pathname.startsWith("/api/")) {
      event.respondWith(networkFirstApi(request));
      return;
    }
    if (
      url.pathname.startsWith("/_next/static/") ||
      url.pathname.startsWith("/icon") ||
      url.pathname === "/manifest.webmanifest"
    ) {
      event.respondWith(cacheFirst(request, RUNTIME_CACHE));
      return;
    }
  }

  if (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(cacheFirst(request, RUNTIME_CACHE));
  }
});
