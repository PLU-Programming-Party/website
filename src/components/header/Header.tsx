import React from 'react';
import './header.css';

export default function Header() {

  const home = {
    direction: ((Math.random() * 10) < 5 ? true : false),
    duration: (Math.round(Math.random() * 1000000000) + 100)
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
      string += "spinny-time-2 "
    } else {
      string += "spinny-time "
    }

    return string
  }

  

  return (
    <div id='header'>
        <div>
            <h1 className='page-title'>Programming Party!</h1>
        </div>   
        <div>
            <ul className='directory-list'>
                <li className={propellerClass(home)}><a href='https://www.google.com/' target='_blank'>home</a></li>
                <li className={propellerClass(projects)}><a href='https://www.bing.com/' target='_blank'>projects</a></li>
                <li className={propellerClass(about)}><a href='https://www.google.com/' target='_blank'>about</a></li>
                <li className={propellerClass(join)}><a href='https://www.google.com/' target='_blank'>join</a></li>
            </ul>
        </div>
    </div>
  )
}

