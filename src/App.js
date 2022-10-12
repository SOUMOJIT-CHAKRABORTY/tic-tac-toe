import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  return Board();
}

function Board() {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const changeMark = (i) => {
    const m = [...marks];
    console.log(m);
    m[i] = 1;
    setMarks(m);
  };

  return (
    <div className="Board">
      <div>
        <Square mark={2} position={0} changeMark={changeMark}></Square>
        <Square mark={1} position={1} changeMark={changeMark}></Square>
        <Square mark={1} position={2} changeMark={changeMark}></Square>
      </div>
      <div>
        <Square mark={1} position={3} changeMark={changeMark}></Square>
        <Square mark={1} position={4} changeMark={changeMark}></Square>
        <Square mark={1} position={5} changeMark={changeMark}></Square>
      </div>
      <div>
        <Square mark={1} position={6} changeMark={changeMark}></Square>
        <Square mark={1} position={7} changeMark={changeMark}></Square>
        <Square mark={1} position={8} changeMark={changeMark}></Square>
      </div>
    </div>
  );
}

// function Block() {}
function Square({ mark, changeMark, position }) {
  return (
    <div className={`square mark${mark}`} onClick={(e) => changeMark()}></div>
  );
}

export default App;
