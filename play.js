// Main file that will launch the game client


// Connect to server
const net = require("net");

// require function from client.js
const { connect } = require('./client');
const { setupInput } = require('./input');


console.log("Connecting...");
connect();

setupInput()



