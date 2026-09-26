const CACHE_NAME = 'maisya-ekskul-pwa-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Cache addAll warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Hanya cache GET request dan abaikan request ke backend Google Script
  if (event.request.method !== 'GET') return;
  if (event.request.url.includes('script.google.com') || event.request.url.includes('script.googleusercontent.com')) {
    return; // Bypass SW cache for API calls
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Stale while revalidate untuk aset lokal
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
