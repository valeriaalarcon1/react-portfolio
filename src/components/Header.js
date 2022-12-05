import React from 'react';
import Nav from './Navbar';

const styles = {
  header: {
    marginTop: '30px',
    width: '100%',
    textAlign: 'center',
  },
  h1: {
    textTransform: 'uppercase',
    fontWeight: '200',
    letterSpacing: '8px',
  }
};


function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.h1}>Valeria Alarcon</h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;