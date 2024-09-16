import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <h1 className="title-settings">Hi, I'm Abhimanyu Chaudhary! <img src={require("./madrobin_logo_mrk5.png")} className="Logo Logo-rotate Logo-title" alt="logo"/></h1>
      <h2 className='title-settings about-me' id="line-2">I'm a full stack developer with a lot of experience in programming and hardware.</h2>
      <img src={require("./small_shapes/small_round_square.png")} alt="circle" className='Small-shape'></img>
      <div id="links">
        <a href={"https://github.com/MadRobin13"}><img src={require("./github.png")} alt="github logo"/></a>
        <a href={"mailto:madrobin1340@gmail.com"}><img src={require("./at_symbol_mrk1.png")} alt="email me here button"/></a>
        <a><img src={require("./linkedin-app-white-icon.png")} alt="linkedin"/></a>
        <a href={"https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"}><img src={require("./document-512.png")} alt="resume"/></a>
        <a href={"https://www.printables.com/@mando13_1132886"}><img src={require("./printables_icon_white_v3.png")} id="printables" alt="printables logo"/></a>
      </div>

      <p className='Arrow'>{'>'}</p>
      <img src={require("./blue_minimal.png")} alt="sand" className="Sand"/>

      <body className="App-body">
        <div>
          <p id="first-sentence">
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
      </body>

      {/* <footer className="App-footer"> </footer> */}
      <script>
        
      </script>
    </div>
  );
}



export default App;