addEventListener("install", (event) => {});

addEventListener("message", (event) => {
  const log = (str) => {
    console.log(str);
    event.source.postMessage(str);
  };

  log("message");
  const request = new Request("./text.txt");
  event.waitUntil(
    caches.open("v1").then(async (cache) => {
      log("cache start");
      //   await cache.addAll([request]);
      await cache.addAll([request, request]).catch((e) => {
        log("error");
        log(e);
      });
      log("cache end");
      cache.match(request).then((res) => {
        log("match");
        log(res);
      });
    })
  );
});
