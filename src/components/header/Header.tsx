import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const home = {
    direction: Math.random() * 10 < 5 ? true : false,
    duration: Math.round(Math.random() * 1000) + 100,
  };

  const projects = {
    direction: Math.random() * 10 < 5 ? true : false,
    duration: Math.round(Math.random() * 1000) + 100,
  };

  const about = {
    direction: Math.random() * 10 < 5 ? true : false,
    duration: Math.round(Math.random() * 1000) + 100,
  };

  const join = {
    direction: Math.random() * 10 < 5 ? true : false,
    duration: Math.round(Math.random() * 1000) + 100,
  };

  const propellerClass = (headerObject: any) => {
    let string = "";

    if (headerObject.direction) {
      string += "spinny-time-2-hover ";
    } else {
      string += "spinny-time-hover ";
    }

    return string;
  };

  function propellerSpeed(headerObject: any) {
    return "" + headerObject.duration + "ms";
  }

  return (
    <div id="header">
      <div>
        <h1 className="page-title">Programming Party!</h1>
      </div>
      <div>
        <ul className="directory-list">
          <li
            className={propellerClass(home)}
            style={{ animationDuration: propellerSpeed(home) }}
          >
            <NavLink to="/">home</NavLink>
          </li>
          <li
            className={propellerClass(projects)}
            style={{ animationDuration: propellerSpeed(projects) }}
          >
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li
            className={propellerClass(about)}
            style={{ animationDuration: propellerSpeed(about) }}
          >
            <NavLink to="/about">about</NavLink>
          </li>
          <li
            className={propellerClass(join)}
            style={{ animationDuration: propellerSpeed(join) }}
          >
            <NavLink to="/join">join</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
