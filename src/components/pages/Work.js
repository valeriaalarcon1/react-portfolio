import React from 'react';
import Project from './Project';


const styles = {
  page: {
    margin: '45px',
    textAlign: 'center',
  },
  title: {
    fontWeight: '200',
  },
  text: {

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