const CACHE = 'gasdrive-v8.8.2'; // sube versión para que se actualice
const FILES = [
  './',
  './index.html',
  './app.js',
  './temario.js', // por si lo separaste
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './01_Senyals_Tomo_I_RD_465_2025.pdf' // NUEVO: tu PDF
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
}); 

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});