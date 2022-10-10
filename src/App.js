import React from "react";
import "./App.css";
function Square() {
  return <div className="square cross"></div>;
}

function App() {
  return Board();
}

function Board() {
  return (
    <div>
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
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

function Block() {}

export default App;
