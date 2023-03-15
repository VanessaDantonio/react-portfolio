import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Skills from './pages/Skills/index';
import Projects from './pages/Projects/index';
import Contact from './pages/Contact/index';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;