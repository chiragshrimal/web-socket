import { WebSocketServer } from "ws";

const wss =new WebSocketServer({port: 8080});

// event handler 
wss.on("connection",function(socket){
    console.log("user connected");

    // setInterval(()=>{
    //     socket.send("Current price of solana is " + Math.random());
    // },500);

    // // server is sending  message to client based on client what is sending 
    // socket.on("message",(e)=>{
    //     console.log(e.toString());
    // })

    socket.on("message",function(e){
        socket.send(e.toString());
    })

});