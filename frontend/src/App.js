import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import reactLogo from './assets/react-logo.png';
import nodeLogo from './assets/node-logo.png';
import expressLogo from './assets/express-logo.png';


function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/message")
        .then(res => setMessage(res.data.message))
        .catch(err => console.error("Error fetching message:", err));
  }, []);


  return (
    <div className="container">
      <h1 className="title">
        <img src={reactLogo} alt="React" className="logo react" /> React Frontend
      </h1>
      <p className="message">{message}</p>
      <div className="backend-logos">
        <img src={nodeLogo} alt="Node.js" className="logo node" />
        <img src={expressLogo} alt="Express.js" className="logo express" />
      </div>
    </div>
  );
}



 export default App;