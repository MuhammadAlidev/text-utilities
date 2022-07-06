import React, { useState } from "react";

const TextForm = (props) => {
  const [Text, setText] = useState("");
  const handleUpClick = () => {
    const value = Text.toUpperCase();
    setText(value);
  };
  const handleLowClick = () => {
    const value = Text.toLocaleLowerCase();
    setText(value);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
  };
  const handleReverse = () => {
    let newText = "";
    for (let i = Text.length - 1; i >= 0; i--) {
        newText += Text[i];
    }
    setText(newText)
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
  };
  const handleFirstCap = () => {
    let newText = Text.toLowerCase() 
    let newText2 = newText.charAt(0).toUpperCase() + newText.slice(1);
    setText(newText2)
  };
  const handleRedundancy = ()=> { 
    let newText1 = new Set(Text.split(" "));          
    let newText2 = Array.from(newText1).join(" ");
    setText(newText2);
  }
  const handleExtraSpaces = ()=> { 
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={Text}
            onChange={handleOnChange}
          />
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-1 my-1">
          Convert to UpperCase
        </button>
        <button onClick={handleLowClick} className="btn btn-primary mx-1 my-1">
          Convert to LowerCase
        </button>
        <button onClick={handleFirstCap} className="btn btn-primary mx-1 my-1">
          First alphabet capital
        </button>
        <button onClick={handleRedundancy} className="btn btn-primary mx-1 my-1">
          Handle Redundancy
        </button>
        <button onClick={handleCopy} className="btn btn-primary mx-1 my-1">
          Copy text
        </button>
        <button onClick={handleReverse} className="btn btn-primary mx-1 my-1">
          Reverse text
        </button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">
          Remove Extra Spaces
        </button>
        <button onClick={handleClear} className="btn btn-primary mx-1 my-1">
          Clear text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>{Text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} words & {Text.length} characters</p>
        <p>Time to read: {0.008*Text.split(' ').length} minutes</p>
        <h2>Preview:</h2>
        <p>{Text.length>0?Text:'Enter something to preview in it'}</p>
      </div>
    </>
  );
};

export default TextForm;
