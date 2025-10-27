self.addEventListener('install', event => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', event => {
  // Esto permite cachear y cargar archivos offline
});
