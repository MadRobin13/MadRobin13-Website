import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./madrobin_logo_mrk5.png")} className="Logo" alt="logo" />
      </header>

      {/* <p>|
        V</p> */}
      <img src={require("./sand.jpg")} alt="sand" className="Sand"/>

      <body className="App-body">
        <div>
          <h1>Hi, I'm Abhimanyu Chaudhary! <img src={require("./madrobin_logo_mrk5.png")} className="Logo Logo-rotate Logo-title" alt="logo" /></h1>
        </div>
      </body>
    </div>
  );
}

export default App;