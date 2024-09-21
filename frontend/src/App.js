import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={require("./madrobin_logo_mrk5.png")} className="Logo" alt="logo"/>
      <div id="links">
          <a href={"https://github.com/MadRobin13"}><img src={require("./github_logo_purple.png")} alt="github logo"/></a>
          <a href={"mailto:madrobin1340@gmail.com"}><img src={require("./yellow_mail_icon.png")} alt="email me here button"/></a>
          <a href={"https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/"}><img src={require("./linkedin_logo_blue.png")} alt="linkedin"/></a>
          <a href={"https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"}><img src={require("./green_doc_icon.png")} alt="resume"/></a>
          <a href={"https://www.printables.com/@mando13_1132886"}><img src={require("./printables_icon_orange_v5.png")} id="printables" alt="printables logo"/></a>
          <a href={"https://www.youtube.com/@ton-of-fun-reviews1352"}><img src={require("./youtube_icon_v2.png")} id="youtube" alt="youtube logo"/></a>
        </div>
      </header>
      <img alt="triangle" id="triangle" src={require("./glow_triangle_v3.png")}/>
      <div id="title-stuff">
        <h1 className="title-settings hi">Hi I'm</h1>
        <h1 className="title-settings" id="name">Abhimanyu Chaudhary.</h1>
        <h2 className='title-settings about-me' id="line-2">I'm a full stack developer and </h2>
        <h2 className='title-settings about-me' id="line-3"> I love robots and automation!</h2>
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
              <p className='description'>A Web Based Chat Application developed </p>
              <p className='description'>using React.js, Go and MongoDB.</p>
              <div className='project-buttons'>
                <a className='github-visit-button' href={"https://github.com/MadRobin13/Chattr"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='demo-visit-button' href={"https://go-and-react-website.vercel.app/"}><p>Visit</p></a>
              </div>
            </div>
          </div>
          <div className="project-group">
           <img src={require("./abc_pic.png")} className='project-image' alt="chattr example"></img>
            <div className="project" id="project-5">
              <h3 className='description'>Food-ABC2XYZ</h3>
              <p className='description'>The world's first AI-powered food thesaurus!</p>
              <p className='description'>Built using HTML, CSS, Javascript, Python, Flask, and the OpenAI API.</p>
              <div className='project-buttons short-one'>
                <a className='github-visit-button weird-small-one' href={"https://github.com/ozzyDev27/FoodABC2XYZ-Frontend"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='github-visit-button weird-small-one' href={"https://github.com/Ultra-bob/FoodABC2XYZ-Backend"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='github-visit-button weird-small-one' href={"https://devpost.com/software/food-abc-2-xyz"}><img src={require("./trophy.png")} alt="github logo"></img></a>
                <a className='demo-visit-button' href={"https://foodabc2xyz.vercel.app/"}><p>Visit</p></a>
              </div>
            </div>
          </div>
          <div className="project-group">
            <img src={require("./DSC02965.JPG")} className='project-image' alt="chattr example"></img>
            <div className="project" id="project-4">
              <h3><img src={require("./first_logo.png")} id="logo-first" alt="first logo"/></h3>
              <p className='description'>I developed code for my FRC team's 2023 and 2024 (this is the one shown) robots and I wrote all the code for our <a href={"https://stemleycup.ca/"}>Stemley 2024</a> robot.</p>
              <p className='description'>My FRC team is <a href={"https://1360.ca/the-team/"}>1360 Orbit Robotics</a>.</p>
              <div className='project-buttons'>
                <a className='github-visit-button' href={"https://github.com/FRC1360/Offseason2024"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='github-visit-button' href={"https://github.com/FRC1360/Crescendo2024"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='github-visit-button' href={"https://github.com/FRC1360/ChargedUp2023"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
                <a className='github-visit-button' href={"https://www.youtube.com/watch?v=Jphalv-HEQo"}><img src={require("./youtube_icon_v2.png")} alt="github logo"></img></a>
              </div>
            </div>
          </div>
         <div className="project" id="project-2">
          <h3><img src={require("./Soap_logo_v2.png")} alt="soap logo"/></h3>
          <p className='description'>A Discord Bot that prevents the use of profanity in servers.</p> 
          <p className='description'>It was built using Javascript and MongoDB.</p>
            <div className='project-buttons'>
              <a className='github-visit-button' href={"https://github.com/MadRobin13/Soap-the-Discord-Bot"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
            </div>
          </div>
          <div className="project" id="project-3">
            <h3><img src={require("./dvd_pong_logo_v2.png")} alt="dvd pong logo"></img></h3>
            <p className='description'>An online pong game based on the bouncing DVD logo.</p>
            <p className='description'>This was built using Godot.</p>
            <div className='project-buttons'>
              <a className='github-visit-button' href={"https://github.com/MadRobin13/DVD-Pong"}><img src={require("./github_logo_purple.png")} alt="github logo"></img></a>
              <a className='demo-visit-button' href={"https://dvd-logo-game.vercel.app/"}><p>Visit</p></a>
            </div>
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