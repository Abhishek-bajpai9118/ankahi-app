const CACHE_NAME = "ankahi-shell-v1";
const APP_SHELL = [
  "./index.html",
  "./css/style.css",
  "./js/firebase-config.js",
  "./js/auth.js",
  "./js/ai-generator.js",
  "./js/app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// App-shell files: cache-first. Everything else (Firestore/Storage/API calls): network-first, no caching.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isShellFile = APP_SHELL.some((f) => url.pathname.endsWith(f.replace("./", "/")));
  if (isShellFile) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
  }
});
