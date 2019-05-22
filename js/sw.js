self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('myCache').then(function (cache) {
            return cache.addAll(
                [
                    '/css/styles.css',
                    '/js/main.js',
                    '/js/restaurant_info.js',
                    '/data/restaurants.json',
                ]
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});