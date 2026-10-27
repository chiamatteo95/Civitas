// Zwiększ numer wersji przy każdej aktualizacji gry, żeby użytkownicy dostali nową wersję.
const V='civitas-v13';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-v3-192.png','./icon-v3-512.png','./icon-v3-maskable-512.png','./apple-touch-icon-v3.png','./favicon-v3.png','./cover.webp','./corner.webp','./face1.webp','./face2.webp','./face3.webp','./face4.webp','./face5.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
