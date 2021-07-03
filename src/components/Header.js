import React from 'react';
import logoSVG from '../assets/img/logo.svg';

import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="/" className={styles.logo}>
          <img src={logoSVG} />
        </a>
      </div>
    </header>
  )
}

export default Header;