self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("lacta").then(c=>c.addAll([
      "index.html","login.html","style.css","app.js"
    ]))
  );
});
