import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./madrobin_logo_mrk5.png")} className="Logo" alt="logo" />
      </header>

      <h1 id="title">Hi, I'm Abhimanyu Chaudhary! <img src={require("./madrobin_logo_mrk5.png")} className="Logo Logo-rotate Logo-title" alt="logo"/></h1>


      <p className='Arrow'> ={'>'}</p>
      <img src={require("./sand.jpg")} alt="sand" className="Sand"/>

      <body className="App-body">
        <div>
          <p id="first-sentence">
          Hi, I'm Abhimanyu, a 15 year-old with a lot of experience in programming and hardware.
          </p>
          <p>
          - I am a programming member and the human player for FRC team <a href={"https://1360.ca/"}>1360 Orbit Robotics</a>
          </p>
          <p>
          - I am an FLL coach for team 60977 as part of the <a href={"https://www.haltonstemclub.ca/"}>Halton Stem Club</a>
          </p>
          <p>
          - I enjoy making projects in my free time
          </p>
          <p id="disclaimer">Please see my github and resume for more of my projects and experience</p>
        </div>

      <div id="links">
        <a href={"https://github.com/MadRobin13"}><img src={require("./github.png")} alt="github logo"/></a>
        <a></a>
        <a></a>
      </div>
      </body>

      <footer className="App-footer"> </footer>
    </div>
  );
}

export default App;