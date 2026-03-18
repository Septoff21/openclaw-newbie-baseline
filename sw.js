// Service Worker — offline support for OpenClaw Playground
const CACHE_NAME = 'openclaw-playground-v6';
const ASSETS = [
  './',
  './styles.css',
  './manifest.json',
  './feed.xml',
  './js/darkmode.js',
  './js/search.js',
  './js/live-feed.js',
  './js/diary-page.js',
  './js/models-page.js',
  './js/directory-page.js',
  './js/audience-wizard.js',
  './js/wizard.js',
  './js/animations.js',
  './js/feedback.js',
  './js/github-stats.js',
  './js/shortcuts.js',
  './js/terminal-demo.js',
  './js/ux-polish.js',
  './js/scroll-reveal.js',
  './js/homepage-cases.js',
  './js/welcome.js',
  './assets/dm-avatar.svg',
  './assets/uhx-avatar.svg',
  './assets/critic-avatar.svg',
  './assets/og-image.svg',
  './agents.html',
  './quickstart.html',
  './directory.html',
  './models.html',
  './verification.html',
  './diary.html',
  './reference.html',
  './shop.html',
  './fork.html',
  './faq.html',
  './troubleshooting.html',
  './prompts.html',
  './free-models.html',
  './changelog.html',
  './404.html'
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

// Fetch — network first for HTML, cache first for static assets
self.addEventListener('fetch', (e) => {
  // Skip non-GET and API calls
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('api.github.com')) return; // Always fresh for live feed

  const url = new URL(e.request.url);
  const isHTML = e.request.headers.get('accept')?.includes('text/html') || url.pathname.endsWith('.html') || url.pathname === '/' || !url.pathname.includes('.');

  if (isHTML) {
    // Network first — always try to get latest HTML, fallback to cache if offline
    e.respondWith(
      fetch(e.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
  } else {
    // Cache first — static assets (CSS, JS, images) change less often
    e.respondWith(
      caches.match(e.request).then(cached => {
        const fetched = fetch(e.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
          }
          return resp;
        }).catch(() => cached);
        return cached || fetched;
      })
    );
  }
});
