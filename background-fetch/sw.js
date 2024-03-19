// const main = async (send) => {
//   send("main");

//   send(`${JSON.stringify(self.registration)}`);
//   const backgroundFetch = await self.registration.backgroundFetch;
//   send(`bgfetch: ${backgroundFetch}`);

//   //   let registration = await backgroundFetch.get("id").catch((e) => {
//   //     send(e.message);
//   //   });
//   //   send("bgfetch 1");
//   //   if (!registration) {
//   //     send("bgfetch doesn't exist");
//   //     registration = await backgroundFetch.fetch("id", [
//   //       "resources/feature-name.txt",
//   //       "resources/feature-name.txt",
//   //       "resources/feature-name.txt?id=3",
//   //       new Request("resources/feature-name.txt", { method: "PUT" }),
//   //       "/common/slow.py",
//   //     ]);
//   //   }

//   const registration = await backgroundFetch.fetch("id", [
//     "resources/feature-name.txt",
//     "resources/feature-name.txt",
//     "resources/feature-name.txt?id=3",
//     new Request("resources/feature-name.txt", { method: "PUT" }),
//     "/common/slow.py",
//   ]);
//   send("registration done");

//   const matchedRecords = await registration.matchAll(
//     "resources/feature-name.txt"
//   );
//   send("matched");

//   console.log(matchedRecords.length, "should be 3");
//   return matchedRecords.length;
// };

// addEventListener("message", async (event) => {
//   console.log(`The client sent me a message: ${event.data}`);
//   const send = (str) => {
//     event.source.postMessage(str);
//   };
//   send("Hi client");

//   const res = await main(send);
//   send(`res: ${res}`);
// });

console.log('s')