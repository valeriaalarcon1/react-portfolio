import React from 'react';

const styles = {
  section: {
    margin: '50px',
  },
  projects: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}


function Project() {
  return (
    <div className="container">
      <div className="projects" style={styles.section}>
        <div className="item" style={styles.projects}>
          <a href="https://www.github.com/valeriaalarcon1/">
          <img src="" alt="AlphaHub"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="" alt="Project2"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="" alt="Project3"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="" alt="Project4"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;