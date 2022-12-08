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
    color: 'gray',
  },
  text: {
    margin: '100px 60px 0px 60px',
    fontSize: '13pt',
  }
}

export default function About() {
  return (
    <div style={styles.section}>
      <h2 style={styles.header}>About</h2>
      <p style={styles.text}>Valeria Alarcon is a young and passionate creative from New York City with the plan of becoming an entrepreneur. Apart from being a current business student, she is also the co-founder of a media production company called DreamTap Media. As a creator, she not only creates content for her personal brands and businesses, but she also loves to help others create content for their businesses as well, whether it be through videography or photography. She is also a professional dancer and is currently in a professional salsa company in New York. Although her life may seem too occupied for more, Valeria is determined to build multiple assets and pursue many more of her passions and goals. Her ambition has recently led her to take on a new experience of becoming a software developer. As a student in Columbia University's Coding Bootcamp, she strives to become an innovate designer and developer that will attain the knowledge to build her own software company one day.</p>
    </div>
  );
}
