const CACHE = 'gasdrive-v10.6.53'; // puja versió per forçar update
const FILES = [
  './',
  './index.html',
  './app.js',
  './temario.js', // per si lo separaste
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  // PDFs Temari - 5 arxius complets
  './01_Senyals_Tomo_I_RD_465_2025.pdf',           // PDF 1: Senyals
  './02_Normes_Circulacio_Tomo_II_Edicio_2024.pdf', // PDF 2: Normes Circulació
  './03_Manual_IX_Primers_Auxilis_2025.pdf',        // PDF 3: Primers Auxilis
  './04_Manual_VIII_Mecanica_2024.pdf',             // PDF 4: Mecànica
  './05_Medi_Ambient_Distintius_DGT_2025.pdf'       // PDF 5: Medi Ambient
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
