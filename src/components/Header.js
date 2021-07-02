import React from 'react';
import logoSVG from '../assets/img/logo.svg';
import Container from './Container';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <a href="/" className={styles.logo}>
          <img src={logoSVG} />
        </a>
      </Container>
    </header>
  )
}

export default Header;