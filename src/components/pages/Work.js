import React from 'react';
import Project from './Project';


const styles = {
  page: {
    margin: '100px',
  },
  title: {
    textAlign: 'center',
    fontWeight: '200',
    fontSize: '65pt',
    color: 'gray',
  },
  text: {
    textAlign: 'center',
  }
}


function Work() {
  return (
    <div className="container" style={styles.page}>
      <h1 style={styles.title}>Work</h1>
      <Project></Project>
    </div>
  );
}

export default Work;