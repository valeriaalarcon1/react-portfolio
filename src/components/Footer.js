import React from 'react';

const styles = {
    footer: {
        position: 'fixed',
        width: '100%',
        bottom: '0',
        textAlign: 'center',
    },
};

function Footer() {
return (
    <footer className="footer" style={styles.footer}>
        <p>Created using React</p>
    </footer>
);
}

export default Footer;