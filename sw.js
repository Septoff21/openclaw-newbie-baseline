// Service Worker — offline support for OpenClaw Playground
const CACHE_NAME = 'openclaw-playground-v1';
const ASSETS = [
  './',
  './styles.css',
  './js/darkmode.js',
  './js/search.js',
  './js/live-feed.js',
  './js/diary-page.js',
  './assets/dm-avatar.svg',
  './assets/uhx-avatar.svg',
  './assets/critic-avatar.svg',
  './agents.html',
  './quickstart.html',
  './directory.html',
  './models.html',
  './verification.html',
  './diary.html',
  './reference.html',
  './shop.html',
  './fork.html',
  './changelog.html'
];

// Install — cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first, network fallback
self.addEventListener('fetch', (e) => {
  // Skip non-GET and API calls
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('api.github.com')) return; // Always fresh for live feed

  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetched = fetch(e.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached); // Offline fallback

      return cached || fetched;
    })
  );
});
