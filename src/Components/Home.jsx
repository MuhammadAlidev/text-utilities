import React from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useState } from "react";

const Home = () => {
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
  return(
    <>
      <Navbar title="Text Utils" mode={mode} toggle={toggle} />
      <TextForm heading="Enter text to analyze" />
   </>
  );
};

export default Home;
