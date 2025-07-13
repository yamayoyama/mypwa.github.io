const cachName ="hello-pwa";
const fillsToCache = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/main.js"
];

self.addEventListener("install", (e) => {
    e.waitUtil(
        CacheStorage.open(cachName).then((cache) => {
            return cache.addAll(fillsToCache);
        })
    )
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});