// Service Worker for Jarvis Shell Head Blog
const CACHE_NAME = 'jarvis-shell-head-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/blog.html',
  '/about.html',
  '/article.html',
  '/style.css',
  '/script.js',
  '/blogs/article1.txt',
  '/blogs/article2.txt',
  '/blogs/article3.txt',
  '/blogs/article4.txt',
  '/blogs/article5.txt'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
