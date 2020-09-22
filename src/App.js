import React  from "react";
import "./App.css";

import Intervalo from './components/intervalo/Intervalo'
import Soma from './components/soma/Soma'
import Media from './components/media/Media'
import Sorteio from './components/sorteio/Sorteio'

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo />
      </div>
      <div className="linha">
        <Soma />
        <Media />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
