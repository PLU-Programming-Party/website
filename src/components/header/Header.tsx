import React from 'react';
import './header.css';

export default function Header() {

  const home = {
    direction: ((Math.random() * 10) < 5 ? true : false),
    duration: (Math.round(Math.random() * 1000) + 100)
  }

  const projects = {
    direction: ((Math.random() * 10) < 5 ? true : false),
    duration: (Math.round(Math.random() * 1000) + 100)
  }

  const about = {
    direction: ((Math.random() * 10) < 5 ? true : false),
    duration: (Math.round(Math.random() * 1000) + 100)
  }

  const join = {
    direction: ((Math.random() * 10) < 5 ? true : false),
    duration: (Math.round(Math.random() * 1000) + 100)
  }

  const propellerClass = (headerObject:any) => {
    let string = "";

    if(headerObject.direction){
      string += "spinny-time-2-hover "
    } else {
      string += "spinny-time-hover "
    }

    return string
  }

  function propellerSpeed(headerObject:any) {
    return ""+headerObject.duration+"ms"
  }

  return (
    <div id='header'>
        <div>
            <h1 className='page-title'>Programming Party!</h1>
        </div>   
        <div>
            <ul className='directory-list'>
                <li className={propellerClass(home)} style={{animationDuration:propellerSpeed(home)}}><a href='https://www.google.com/' target='_blank'>home</a></li>
                <li className={propellerClass(projects)} style={{animationDuration:propellerSpeed(projects)}}><a href='https://www.bing.com/' target='_blank'>projects</a></li>
                <li className={propellerClass(about)} style={{animationDuration:propellerSpeed(about)}}><a href='https://www.google.com/' target='_blank'>about</a></li>
                <li className={propellerClass(join)} style={{animationDuration:propellerSpeed(join)}}><a href='https://www.google.com/' target='_blank'>join</a></li>
            </ul>
        </div>
    </div>
  )
}

