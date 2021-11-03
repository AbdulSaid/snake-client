const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here
    port: 50541 // Port number here
  });

  // Handle incoming data and console.log for the player
  conn.on("connect", ()=> {
    console.log("Client is connected to the server")
  })

  // Interpret incoming data as text
  conn.setEncoding("utf-8");

  //send data to the server
  conn.write('Name: AAS');
  
  
  

  

  return conn;
};

module.exports = connect;