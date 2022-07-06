import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import '../App.css'

const About = () => {
  const [mode, setMode] = useState("light");
  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <Navbar title="Text Utils" mode={mode} toggle={toggle} />
      <div className="about-section">
        <h1>About Me</h1>
        <p>Muhammad Ali</p>
        <p>I'm a frontend enthusiast and this is my first react app of 2k22</p>
      </div>
    </div>
  );
};
export default About;
