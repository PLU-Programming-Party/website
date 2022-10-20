import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import Header from './components/header/Header';
import Project from './components/project/Project';

function App() {

  console.log(process.env)

  const [confetti, setConfetti] = useState(false);

  const { width, height } = useWindowSize()

  function toggleConfetti(){
    setConfetti(prev => !prev);
  }

  return (
    <div className="App">
      <Header />
      <button onClick = {toggleConfetti}>
        This is not a button!
      </button>
      {
        confetti && 
        <Confetti
        width={width}
        height={height}
        />
      }
      <Project confetti={confetti} />
    </div>
  );
}



export default App;
