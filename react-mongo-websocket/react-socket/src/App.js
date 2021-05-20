import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://socket-gammpbeyva-uc.a.run.app";

function App() {

  const [data, setData] = useState('No');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('fetch');

    socket.on('fetch', (data) => {
      console.log(data);
      setData('Si');
    });
  }, []);


  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
