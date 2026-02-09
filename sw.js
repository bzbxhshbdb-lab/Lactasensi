self.addEventListener("install", e=>{
  self.skipWaiting();
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.open("lacta-v1").then(cache=>{
      return cache.match(e.request).then(resp=>{
        return resp || fetch(e.request).then(r=>{
          cache.put(e.request, r.clone());
          return r;
        });
      });
    })
  );
});
