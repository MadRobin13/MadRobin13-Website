import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require("./madrobin_logo_mrk5.png")} className="Logo" alt="logo"/>
      <div id="links">
          <a href={"https://github.com/MadRobin13"}><img src={require("./github.png")} alt="github logo"/></a>
          <a href={"mailto:madrobin1340@gmail.com"}><img src={require("./at_symbol_mrk1.png")} alt="email me here button"/></a>
          <a href={"https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/"}><img src={require("./linkedin-app-white-icon.png")} alt="linkedin"/></a>
          <a href={"https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"}><img src={require("./document-512.png")} alt="resume"/></a>
          <a href={"https://www.printables.com/@mando13_1132886"}><img src={require("./printables_icon_white_v5.png")} id="printables" alt="printables logo"/></a>
        </div>
      </header>
      <img alt="triangle" id="triangle" src={require("./glow_triangle_v3.png")}/>
      <div id="title-stuff">
        <h1 className="title-settings hi">Hi I'm</h1>
        <h1 className="title-settings" id="name">Abhimanyu Chaudhary.</h1>
        <h2 className='title-settings about-me' id="line-2">I'm a full stack developer and </h2>
        <h2 className='title-settings about-me' id="line-3"> I love creating robots!</h2>
      </div>

      <button className='Arrow'>{'>'}</button>
      {/* <img src={require("./blue_minimal.png")} alt="sand" className="Sand"/> */}

      <body className="App-body">
        <div id="projects">
          <h2>Projects</h2>
          <div className="project-group">
            <img src={require("./chattr_example.png")} className='project-image' alt="chattr example"></img>
            <div className="project" id="project-1">
              <h3><img src={require("./chattr_logo_v5.png")} alt="chattr logo"/></h3>
              <p>A Web Based Chat Application developed </p>
              <p>using Go and React.js</p>
              <div className='project-buttons'>
                <a className='github-visit-button' href={"https://github.com/MadRobin13/Chattr"}><img src={require("./github_logo_purple.png")} alt="purple github logo"></img></a>
                <a className='demo-visit-button' href={"https://go-and-react-website.vercel.app/"}><p>Visit</p></a>
              </div>
            </div>
          </div>
          <div className="project" id="project-2">
          <h3><img src={require("./Soap_logo_v2.png")} alt="soap logo"/></h3>
          <p>A Discord Bot that prevents the use of profanity in servers.</p> 
          <p>It was built using Javascript and MongoDB.</p>
            <div className='project-buttons'>
                <a className='github-visit-button' href={"https://github.com/MadRobin13/Soap-the-Discord-Bot"}><img src={require("./github_logo_purple.png")} alt="purple github logo"></img></a>
                <a className='demo-visit-button na-button'><p>N/A</p></a>
              </div>
          </div>
          <div className="project" id="project-3">
            <h3>Project 3</h3>
            <p>Project 3 Description</p>
          </div>
          <div className="project" id="project-4">
            <h3>Project 4</h3>
            <p>Project 4 Description</p>
          </div>
        </div>
      </body>

      <footer className="App-footer"> 
      </footer>
      <script src={"./methods.js"}>

    import scrollFunction, topFunction from {'./methods.js'};

      let mybutton = document.querySelector(".Arrow");

      {/* window.onscroll = function() {scrollFunction(mybutton)}; */}
      </script>
    </div>
  );
}



export default App;