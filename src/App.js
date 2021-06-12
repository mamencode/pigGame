import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [dice, setDice] = useState(null);
const [active, setActive]= useState(0)
const [current1, setCurrent1]= useState(0)
const [plyer0, setPlyer0]= useState(0)
const [plyer1, setPlyer1]= useState(0)
const [current0, setCurrent0]= useState(0)

  const rollDice = function () {
    const _dice = Math.trunc(Math.random() * 6) + 1;
    console.log(_dice)
    setImgSrc(`images/dice-${_dice}.png`);
if(_dice!==1){
  setDice(_dice)
// active===0 ?setPlyer0(setCurrent(current+ dice)): setPlyer1()
}else{
setActive(active===0? 1: 0)
}
  };
  return (
    <div className="App">
      <div className="main">
        <div style={{ display: "flex" }}>
          <div className={`player ${active===0?"player--active": ""}`} >
            <h2 className="name" id="name--0">
              Player 1
            </h2>
            <p className="score" id="score--0">
              {plyer0}
            </p>
            <div className="current">
              <p className="current-label">Current</p>
              <p className="current-score" id="current--0">
                {current0}
              </p>
            </div>
          </div>
          <div className={`player ${active===1?"player--active": ""}`}>
            <h2 className="name" id="name--1">
              Player 2
            </h2>
            <p className="score" id="score--1">
              {plyer1}
            </p>
            <div className="current">
              <p className="current-label">Current</p>
              <p className="current-score" id="current--1">
                {current1}
              </p>
            </div>
          </div>
        </div>
        <img className="dice" src={imgSrc} alt="" />
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll" onClick={rollDice}>
          🎲 Roll dice
        </button>
        <button className="btn btn--hold">📥 Hold</button>
      </div>
    </div>
  );
}
