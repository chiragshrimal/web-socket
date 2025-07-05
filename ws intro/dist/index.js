"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
// event handler 
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(()=>{
    //     socket.send("Current price of solana is " + Math.random());
    // },500);
    // // server is sending  message to client based on client what is sending 
    // socket.on("message",(e)=>{
    //     console.log(e.toString());
    // })
    socket.on("message", function (e) {
        socket.send(e.toString());
    });
});
