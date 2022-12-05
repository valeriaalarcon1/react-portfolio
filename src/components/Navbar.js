import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    margin: '50px',
    fontWeight: '300',
    textDecoration: 'none',
    color: 'gray',
  },
};

function Navbar() {
  return (
    <div className="container" style={styles.navBar}>
      {/* links to pages */}
      <Link to="/" style={styles.navItem}>Home</Link>
      <Link to="/About" style={styles.navItem}>About</Link>
      <Link to="/Work" style={styles.navItem}>Work</Link>
      <Link to="/Contact" style={styles.navItem}>Contact</Link>
    </div>
  );
}

export default Navbar;