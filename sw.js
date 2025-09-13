// sw.js - Service Worker mínimo

// Instala y activa el service worker inmediatamente
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});

// Intercepta las peticiones de red (aquí solo las deja pasar)
self.addEventListener('fetch', event => {
  // Aquí podrías agregar lógica de caché si quisieras
  event.respondWith(fetch(event.request));
});
