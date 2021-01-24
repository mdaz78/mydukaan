import React from 'react';

import shopLogo from '../assets/images/shop-logo.jpg';
import tick from '../assets/images/tick.svg';

import {
  containerFluid,
  container,
  storeDetails,
  imgSide,
  detailsSide,
  trustedSeller,
  search,
} from '../styles/TopBar.module.css';

export default function TopBar() {
  return (
    <div className={containerFluid}>
      <div className={container}>
        <section className={storeDetails}>
          <section className={imgSide}>
            <img src={shopLogo} alt="Shop Logo" />
          </section>
          <section className={detailsSide}>
            <h2>Mano Super Market</h2>
            <section className={trustedSeller}>
              <img src={tick} alt="Trusted Tick" />
              <p>TRUSTED SELLER</p>
            </section>
          </section>
        </section>
        <section className={search}>
          <input type="text" placeholder="Search for products..." />
        </section>
      </div>
    </div>
  );
}
