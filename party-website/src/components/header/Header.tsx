import React from 'react';
import './header.css';

export default function Header() {


  return (
    <div id='header'>
        <div>
            <h1 className='page-title'>Programming Party!</h1>
        </div>   
        <div>
            <ul className='directory-list'>
                <li><a href='https://www.google.com/' target='_blank'>home</a></li>
                <li><a href='https://www.bing.com/' target='_blank'>projects</a></li>
                <li><a href='https://www.google.com/' target='_blank'>about</a></li>
                <li><a href='https://www.google.com/' target='_blank'>join</a></li>
            </ul>
        </div>
    </div>
  )
}

