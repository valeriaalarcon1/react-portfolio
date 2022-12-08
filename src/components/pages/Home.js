import React from 'react';

// style
const styles = {
  section: {
    margin: '100px',
  },
  header: {
    fontSize: '65pt',
    fontWeight: '200',
    textAlign: 'center',
    color: 'salmon',
  },
  text: {
    marginTop: '100px',
    fontSize: '12pt',
  }
}


export default function Home() {
  return (
    <div style={styles.section}>
      <h2 style={styles.header}>Welcome</h2>
      <p style={styles.text}></p>
    </div>
  );
}
