import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import MyData from "./componebt3/MyData/MyData";
import Settings from "./componebt3/Settings/Settings";
import ChangePassword from "./componebt4/ChangePassword/ChangePassword";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/mydata" className="nav-link">MyData</Link>
          <Link to="/settings" className="nav-link">Settings</Link>
          <Link to="/ChangePassword" className="nav-link">ChangePassword</Link>

        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mydata" element={<MyData />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ChangePassword" element={<ChangePassword />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
