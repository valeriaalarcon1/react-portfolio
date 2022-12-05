// imports
import React from "react";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* routes */}
      <Router>
        <Header />
        <Routes>
          {/* paths to pages */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;