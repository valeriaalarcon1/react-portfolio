import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
      {renderPage()}
      <Footer/>
    </div>
  );
}