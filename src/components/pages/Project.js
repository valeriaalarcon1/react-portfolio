import React from 'react';
import './Project.css';

const styles = {
  section: {
    margin: '50px',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
}


function Project() {
  return (
    <div className="container">
      <div className="projects" style={styles.section}>
        <div className="item" style={styles.projects}>
          <a href="https://www.github.com/valeriaalarcon1/alpha-hub">
            AlphaHub
          </a>
          <a href="https://nameless-falls-66947.herokuapp.com/">
            TravelX
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;