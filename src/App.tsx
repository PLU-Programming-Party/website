import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Project from "./components/project/Project";
import Layout from "./components/layout/Layout";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Project />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Project />}></Route>
          <Route path="join" element={<Project />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
