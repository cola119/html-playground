console.profile();

console.timeStamp("Start Rendering");
performance.mark("Start rendering");

function createArr() {
  return new Array(10000).join("x");
}

for (var i = 0; i < 1000; i++) {
  createArr();
}

performance.mark("Finish rendering");
performance.measure("Rendering", "Start rendering", "Finish rendering");

console.timeStamp("Finish Rendering");
console.profileEnd();
