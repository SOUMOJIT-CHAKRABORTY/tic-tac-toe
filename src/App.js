import React from "react";
import "./App.css";

function App() {
  return Board();
}

function Board() {
  return (
    <div className="Board">
      <div>
        <Square mark="{}"> </Square>
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

// function Block() {}
function Square({ mark }) {
  return <div className={`square ${mark}`}></div>;
}

export default App;
