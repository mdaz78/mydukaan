import React from 'react';

import logo from '../assets/images/logo.svg';
import {
  containerFluid,
  header,
  title,
  leftSection,
  rightSection,
  downloadButton,
  logoImage,
} from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={containerFluid}>
      <div className={header}>
        <section className={leftSection}>
          <h1 className={title}>Store made with</h1>
          <img src={logo} alt="Logo" className={logoImage} />
        </section>
        <section className={rightSection}>
          <h2>
            <a
              className={downloadButton}
              href="https://play.google.com/store/apps/details?id=com.dukaan.app"
            >
              Download Now
            </a>
          </h2>
        </section>
      </div>
    </div>
  );
}
