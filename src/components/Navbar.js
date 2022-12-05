import React from 'react';

// style
const style = {
  navBar: {
    margin: '50px',
  },
  navItem: {
    color: 'gray',
  }
}

// Navbar function with props from ProjectContainer
function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs" style={style.navBar}>
        <li className="nav-item">
          <a style={style.navItem}
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
      );
};

export default Navbar;