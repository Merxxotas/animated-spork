const nombreCache = "apv-v1"; // Nombre del cache...
const archivos = [
  "/",
  "/index.html",
  //   "purpose": "any maskable",
  // "/error.html",
  "/js/app.js",
  "/js/apv.js",
  "/css/bootstrap.css",
  "/css/styles.css",
];

// Cuando se instala el service worker
self.addEventListener("install", (e) => {
  console.log("Instalado el service worker");
  e.waitUntil(
    // Buen lugar para cachear -
    caches.open(nombreCache).then((cache) => {
      // Esta función es asincrona...
      console.log("cacheando...");
      cache.addAll(archivos);
    })
  );
  // console.log(e);
});

// Activar el service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker activado");
  console.log(e);
});

// Fetch events para el CSS, HTML, imagenes JS, y hasta llamados a fetch..
self.addEventListener("fetch", (e) => {
  console.log("Fetch.. ", e);

  // e.respondWith(
  //     caches.match(e.request)
  //         .then(respuestaCache => {
  //             return respuestaCache || fetch(e.request);
  //         })
  //         .catch( () => caches.match('/error.html'))
  // );
});
