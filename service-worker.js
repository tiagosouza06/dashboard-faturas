'use strict';

// This is a service worker script for enabling offline functionality
self.addEventListener('install', (event) => {
    // Perform install steps
    console.log('Service worker installing...');
});

self.addEventListener('fetch', (event) => {
    console.log(`Fetching resource: ${event.request.url}`);
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activated');
});
