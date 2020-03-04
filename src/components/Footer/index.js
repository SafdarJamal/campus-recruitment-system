import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navbar bg="light" variant="light" fixed="bottom">
        <Navbar.Text>© 2020 Safdar Jamal</Navbar.Text>
      </Navbar>
    </footer>
  );
};

export default Footer;
