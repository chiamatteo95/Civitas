// Zwiększ numer wersji przy każdej aktualizacji gry, żeby użytkownicy dostali nową wersję.
const V='civitas-v16';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-v4-192.png','./icon-v4-512.png','./icon-v4-maskable-512.png','./apple-touch-icon-v4.png','./favicon-v4.png','./cover.webp','./corner.webp','./face1.webp','./face2.webp','./face3.webp','./face4.webp','./face5.webp','./fonts/dm-sans-latin-ext-wght-normal.woff2','./fonts/dm-sans-latin-wght-normal.woff2','./fonts/playfair-display-latin-ext-wght-normal.woff2','./fonts/playfair-display-latin-wght-normal.woff2'];
// Pomijamy serwer gry (/api) i pliki serwera deweloperskiego – zawsze idą prosto do sieci.
const SKIP=/^\/(api|@|src\/|node_modules\/|__)/;
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin||SKIP.test(u.pathname))return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(V).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
});
