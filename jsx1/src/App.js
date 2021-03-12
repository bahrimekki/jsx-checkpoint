import React from "react";
import './App.css';
import './style.css'
import imageInSrc from "./imageInSrc.png"
import myVideo from "./myVideo.mp4"

function App() {
  return (
    <React.Fragment>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

      <h1 className="title red">Your name here</h1>

      <br/>

      <img src={imageInSrc} alt="imageInSrc"/>

      <br/>

      <img src="/imageInPublic.png" alt="imageInPublic"/>

      </div>

      <video width="320" height="240" controls>

      <source src={myVideo} type='video/mp4'/>

      </video>
    </React.Fragment>
  );
}

export default App;
