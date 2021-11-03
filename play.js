const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here
    port: 50541 // Port number here
  });

  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  return conn;
};

console.log("Connect...")
connect();