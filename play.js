// Main file that will launch the game client


// Connect to server
const net = require("net");
// require function from client.js
const { connect } = require('./client');


console.log("Connecting...");
connect();



