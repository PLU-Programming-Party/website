import React, { useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
// import "../App.css";

export default function Project() {
  const [confetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();

  function toggleConfetti() {
    setConfetti((prev) => !prev);
  }
  return (
    <div>
      <button onClick={toggleConfetti}>This is not a button!</button>
      {confetti && <Confetti width={width} height={height} />}
      <div>
        <img
          className={confetti ? "spinny-time" : ""}
          src={`${process.env.PUBLIC_URL}/img/ski-mage.png`}
          alt="ski mage img"
        />
      </div>
    </div>
  );
}
