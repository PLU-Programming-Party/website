import React, {useState} from 'react';
import Confetti from 'react-confetti/dist/types/Confetti';
import useWindowSize from 'react-use/lib/useWindowSize';


export default function Project() {
  
  let confetti:boolean=false
  const { width, height } = useWindowSize()

  function toggleConfetti(){
    confetti=!confetti;
  }
  return (
    <div>
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
    <div>
      <img className={confetti ? 'spinny-time' : ''} src={`${process.env.PUBLIC_URL}/img/ski-mage.png`} alt="ski mage img" />
    </div>
    </div>
  );
}
