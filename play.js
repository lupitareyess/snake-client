// Main file that will launch the game client

// Setup interface to handle user input from stdin
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput)

  return stdin;
};

// Connect to server
const net = require("net");
// require function from client.js
const { connect } = require('./client');


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

console.log("Connecting...");
connect();
setupInput()



