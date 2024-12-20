import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/Pages/AboutUs'
import SignUp from './components/Pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/aboutUs" element={<AboutUs />} />
             <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
