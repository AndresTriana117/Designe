var udp = require("dgram");

// creating a client socket
var client = udp.createSocket("udp4");

//buffer msg
var data = Buffer.from("Latitude:10.92;Longitude:-74.77;Fecha:2021;Hora:2000");

client.on("message", function (msg, info) {
  console.log("Data received from server : " + msg.toString());
  console.log(
    "Received %d bytes from %s:%d\n",
    msg.length,
    info.address,
    info.port
  );
});

//sending msg
client.send(data, 5000, "ip publica", function (error) {
  if (error) {
    client.close();
  } else {
    console.log("Data sent !!!");
  }
});
