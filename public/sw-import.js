importScripts('bower_components/platinum-sw/service-worker.js');

// self.addEventListener('install', function(event) {
//   // Put `offline.html` page into cache
//   console.log(event);
//   // var offlineRequest = new Request('offline.html');
//   // event.waitUntil(
//   //   fetch(offlineRequest).then(function(response) {
//   //     return caches.open('offline').then(function(cache) {
//   //       return cache.put(offlineRequest, response);
//   //     });
//   //   })
//   // );
// });