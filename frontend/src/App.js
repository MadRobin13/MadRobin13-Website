import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./madrobin_logo_mrk5.png")} className="App-logo" alt="logo" />
      </header>


      <img src={require("./sand.jpg")} alt="sand" className="Sand"/>


      <body className="App-body">
        MadRobin13
      </body>
    </div>
  );
}

export default App;
