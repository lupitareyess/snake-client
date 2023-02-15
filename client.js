// Create function establish connection
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server.")
    conn.write("Name: LR")
    setTimeout(() => {
      conn.write("Move: up")
    }, 50)
    setInterval(() => {
      conn.write("Move: up")
    }, 1000)
  })


  // Handle incoming data and logs to user
  conn.on('data', (data) => {
    console.log("Server says:", data)
  });

  return conn;
};

module.exports = { connect };