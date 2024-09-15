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
        </div>
        <div id="certification"><a href={"https://www.credly.com/badges/7dc8a2c8-3deb-4af7-b55c-ce09bcd9eb37/public_url"}><img src={require("./ai-and-ml-with-python-skill-circuit-stream-in-partn_small.png")}/></a></div>
        <p id="disclaimer">Please see my github and resume for more of my projects and experience</p>
      <div id="links">
        <a href={"https://github.com/MadRobin13"}><img src={require("./github.png")} alt="github logo"/></a>
        <a href={"mailto:madrobin1340@gmail.com"}><img src={require("./at_symbol_mrk1.png")}/></a>
        <a><img src={require("./linkedin-app-white-icon.png")}/></a>
        <a href={"https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"}><img/></a>
        <a>printables logo</a>
      </div>
      </body>

      {/* <footer className="App-footer"> </footer> */}
    </div>
  );
}

export default App;