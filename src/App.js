import React from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import socket from "socket.io-client";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onclick={ io("http://10.136.104.49:48902").emit("registerShelter", "")}>BUTTON</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br />
        </a>
      </header>
    </div>
  );
}

export default App;
