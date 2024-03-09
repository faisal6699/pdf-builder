import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from "./canvas/Canvas";

function App() {
  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>

        <Canvas />
    </div>
  );
}

export default App;
