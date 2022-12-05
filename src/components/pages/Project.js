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
            <img src="../images/projects/project1.jpg" alt="Project1"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="../images/projects/project2.jpg" alt="Project2"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="../images/projects/project3.jpg" alt="Project3"/>
          </a>
          <a href="https://www.github.com/valeriaalarcon1/">
            <img src="../images/projects/project4.jpg" alt="Project4"/>
          </a>
        </div>
      </div>
    </div>
  );
}

// how to hanle a tags and butting tags

export default Project;