const net = require("net");
let client = net.connect({ port: 3000 });

client.on("data", (data) => {
  console.log(data.toString());
});
