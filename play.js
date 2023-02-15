// Main file that will launch the game client


// Connect to server
const net = require("net");

// Create function establish connection
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  // Handle incoming data and logs to user
  conn.on('data', (data) => {
    console.log("Server says:", data)
  });

  return conn;
};

console.log("Connecting...");
connect();



