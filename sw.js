// Service worker for Lịch Việt Nam
// Tăng CACHE_VERSION mỗi khi thay đổi app shell để buộc trình duyệt nhận bản mới.
const CACHE_VERSION = "v3";
const CACHE = "lich-vn-" + CACHE_VERSION;
const APP_SHELL = [
  "./",
  "./index.html",
  "./holiday-schedule.js",
  "./calendar-engine.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith("lich-vn-") && key !== CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  try {
    const response = await fetch(request, {cache: "no-cache"});
    if (response && response.ok) {
      const cache = await caches.open(CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    if (request.mode === "navigate") {
      return caches.match("./index.html");
    }
    return new Response("", {status: 503, statusText: "Offline"});
  }
}

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const request = event.request;

  // HTML/JS/JSON phải ưu tiên bản mới; khi offline dùng cache.
  if (
    request.mode === "navigate" ||
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "manifest"
  ) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Ảnh/icon và tài nguyên khác: cache trước, mạng sau.
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => new Response("", {status: 503, statusText: "Offline"}));
    })
  );
});

// Cho phép trang đang mở yêu cầu cập nhật ngay.
self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
