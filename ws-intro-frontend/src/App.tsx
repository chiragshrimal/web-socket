import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket,setSocket]=useState();
  const inputRef=useRef();


  function sendMessage(){
    if(!socket){
      return ;
    }
    const message = inputRef.current.value;
    // @ts-ignore
    socket.send(message);
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    console.log(ws);
    // ws.onerror=(ev)=>{
    //   console.log(ev);
    // }

    // ws.onclose=(ev)=>{
    //   console.log(ev);
    // }
    ws.onmessage=(ev)=>{
      alert(ev.data);
    }

  },[]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='message'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
