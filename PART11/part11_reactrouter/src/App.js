import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Menu from "./components/Menu";
import Articles from "./components/Articles";
import React from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>리액트 라우터 사용법</h1>
        <header>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/users'>Users</a></li>
          </ul>
        </header> */}
        <Menu></Menu>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/articles" element={<Articles />} />
        <Route path=":id" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
