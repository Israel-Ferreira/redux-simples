import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Card blue title="React">
          <p>React</p>
        </Card>
      </div>
      <div className="linha">
        <Card purple title="Bootstrap">
          <p>Bootstrap</p>
        </Card>
        <Card red title="Angular">
          <p>Angular</p>
        </Card>
        <Card green title="Vue.js">
          <p>Vue.js</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
