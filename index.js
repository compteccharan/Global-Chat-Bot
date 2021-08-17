require('http').createServer((req, res) => res.end(config.webmessage)).listen(5000);
const Aoijs = require("aoi.js")
const config = require('./config.json')
const chat = new Aoijs.Bot({
  mobile: config.mobilepresence, 
  token: process.env.token, // Also process.env.token
  prefix: config.prefix, 
  autoUpdate: config.autoupdate
})
chat.loadCommands("./Commands") 
chat.loadCommands("./Others")

// Variables, DO NOT CHANGE!
chat.variables({
chatchannel: "Not set",
chatinvite: "Not set",
embedcolor: "#74b559",
userrole: ":busts_in_silhouette: USERNAME",
userban: "No banned"
})

// Callbacks
chat.onMessage() 
