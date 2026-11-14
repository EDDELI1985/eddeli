const CACHE_NAME = "eddeli-shell-v34";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-512.png", "./language.js?v=20261113-language-syntax-fix-1", "./lash-visual-library.js?v=20261113-part1-visual-1", "./lash-course-content.js?v=20261113-part1-content-1", "./lash-course-enhancements.js?v=20261113-part1-diagrams-1", "./lash-academic-library.js?v=20261114-illustrations-1", "./lash-material-catalog.js?v=20261114-styles-2"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith("eddeli-shell-") && key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) { const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html"))));
});
