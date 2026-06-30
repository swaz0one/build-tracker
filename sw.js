const CACHE_NAME = 'buildtracker-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network-first, falling back to cache for offline support
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
