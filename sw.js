const CACHE = 'gasdrive-v10.6.64'; // SUBE ESTA VERSION CADA VEZ QUE CAMBIES ALGO
const FILES = [
  './',
  './index.html',
  './app.js',
  './styles.css',
  './temario.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',

  // ===== V9.8.2 BANCO NUEVO =====
  './senyals.json', // TU JSON CON ruta_panel

  // PDFs Temari - 5 arxius complets
  './01_Senyals_Tomo_I_RD_465_2025.pdf',
  './02_Normes_Circulacio_Tomo_II_Edicio_2024.pdf',
  './03_Manual_IX_Primers_Auxilis_2025.pdf',
  './04_Manual_VIII_Mecanica_2024.pdf',
  './05_Medi_Ambient_Distintius_DGT_2025.pdf',

  // ===== V9.8.2 TODOS LOS PANELES DGT EN RAIZ =====
  // P - PERILL
  './P-01_INTERSECCIONES.jpg',
  './P-02_PASO_A_NIVEL.jpg',
  './P-03_FERROCARRIL_AEROPUERTO_CURVAS_RESALTO.jpg',
  './P-04_TUNEL_PENDIENTES_ESTRECHAMIENTO.jpg',
  './P-05_OBRAS_RESBALADIZO_PEATONES.jpg',
  './P-06_ESCUELA_ANCIANOS_CICLISTAS_ANIMALES.jpg',
  './P-07_OTROS_PELIGROS.jpg',

  // R - REGLAMENTACION
  './R-01_A_R_05_PRIORIDAD.jpg',
  './R-02_PROHIBICION_VEHICULOS.jpg',
  './R-03_PROHIBICION_OTROS.jpg',
  './R-04_PROHIBICION_PEATONES_ANIMALES.jpg',
  './R-05_LIMITACIONES_DIMENCIONES.jpg',
  './R-06_PROHIBICION_MANIOBRAS.jpg',
  './R-07_PROHIBICION_ESTACIONAMIENTO.jpg',
  './R-08_RESTRICCIONES_ESTACIONAMIENTO.jpg',
  './R-09_SENTIDO_DIRECCION_OBLIGATORIA.jpg',
  './R-10_PASO_OBLIGATORIO_ROTONDA.jpg',
  './R-11_FIN_OBLIGACION_VEHICULOS.jpg',
  './R-12_FIN_OBLIGACION_PEATONES_ESPECIALES.jpg',

  // S - INFORMACION
  './S-01_TIPOS_DE_VIA.jpg',
  './S-02_TIPOS_DE_VIAS_FIN.jpg',
  './S-06_A_S-11_VELOCIDAD.jpg',
  './S-11A_A_S-14A_SENTIDO.jpg',
  './S-14B_A_S-15A_RAMPAS.jpg',
  './S-15B_A_S-17_CALLES.jpg',
  './S-21_TRANSITABILIDAD.jpg',
  './S-22_A_S-26B_SERVICIOS.jpg',
  './S-26C_A_S-30A_ZONAS.jpg',
  './S-31A_A_S-34A_ZONA_SOS.jpg',
  './S-35_A_S-40_BICI_PATINETE.jpg',
  './S-41_A_S-44_CICLO_PEATON.jpg',
  './S-45_A_S-49_PASOS_ZONA20.jpg',
  './S-50D_A_S-51A_CARRILES.jpg',
  './S-51B_A_S-52C_CARRILES.jpg',
  './S-52D_A_S-53A_BIFURCACION.jpg',
  './S-53B_A_S-61A_SALIDA.jpg',
  './S-61B_A_S-63A_SALIDA.jpg',
  './S-65A_A_S-70A_CARRILES.jpg',
  './S-70B_A_S-72B_CONFLUENCIA.jpg',
  './S-73A_A_S-73B_CONFLUENCIA2.jpg',
  './S-105C_A_S-108_SERVICIO.jpg',
  './S-200_A_S-203_PRESEÑAL.jpg',
  './S-220_A_S-222_PRESEÑAL2.jpg',
  './S-222A_A_S-230_PRESEÑAL3.jpg',
  './S-321_A_S-342_DIRECCION.jpg'
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
  // Cache First: si esta en cache lo sirve, si no fetch
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});