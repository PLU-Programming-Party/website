import React from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {

  function Confetti(){
    const { width, height } = useWindowSize()
      return <Confetti
      width={width}
      height={height}
      />
  }

  const { width, height } = useWindowSize()
  return (
    <div className="App">
      <button onClick = {Confetti}>
        This is not a button!
      </button>
    </div>
  );
}



export default App;
