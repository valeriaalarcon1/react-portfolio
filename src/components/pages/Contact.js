import React from 'react';
import './Contact.css'

// style
const styles = {
  section: {
    margin: '100px',
  },
  header: {
    fontSize: '65pt',
    fontWeight: '200',
    textAlign: 'center',
    color: 'gray',
  },
  links: {
    margin: '100px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '13pt',
    display: 'flex',
  }
}

export default function Contact() {
  return (
    <div style={styles.section}>
      <h2 style={styles.header}>Contact</h2>
      <section className='links' style={styles.links}>
        <a href="https://www.github.com/valeriaalarcon1" className="github" style={styles.link}>
          Github
        </a>
        <a href="https://www.linkedin.com/valeriaalarcon" className="github" style={styles.link}>
          LinkedIn
        </a>
      </section>
    </div>
  );
}
