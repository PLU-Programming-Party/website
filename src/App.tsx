import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Project from './components/project/Project';
import Layout from './components/layout/layout';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
    </Router>
  );
}



export default App;
