import React, { useState } from "react";
import "./styles.css";
var emojiDic = {
  "🤩": "Star-Struck",
  "😪": "Sleepy Face",
  "😗": "Kissing Face",
  "🤥": "Lying Face",
  "😫": "Tired Face",
  "🥶": "Cold Face"
};
var emojiList = Object.keys(emojiDic);

var heading = "Emoji Interpreter";
export default function App() {
  var [meaning, setMeaning] = useState("");
  var styling = {
    backgroundColor: "yellow",
    width: "40%",
    border:"solid black 2px",
    borderRadius: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto"
  };
 
  function changeCatch(event) {
    var meaning = emojiDic[event.target.value];
    setMeaning(meaning);
    if (meaning === undefined) {
      setMeaning("this emoji is not in our library");
    }
  }
  function clickCatch(emoji) {
    var meaning = emojiDic[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className = "alStyle">
        <h1 style={styling}>{heading}</h1>
        <input onChange={changeCatch}></input>
        <h2>{meaning}</h2>
        <h3>emoji we have</h3>
        {emojiList.map((emoji) => {
          return (
            <span className = "emoji_block"
              key={emoji}
              onClick={() => clickCatch(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
