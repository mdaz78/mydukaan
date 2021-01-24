import React from 'react';

import shopLogo from '../assets/images/shop-logo.jpg';
import bagIcon from '../assets/images/navicons-bag-inactive.svg';
import ordersIcon from '../assets/images/navicons-orders-inactive.svg';

import {
  containerFluid,
  container,
  leftSection,
  rightSection,
  bagArea,
  ordersArea,
  bag,
  orders,
  badge,
  searchSection,
  input,
} from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <div className={containerFluid}>
        <div className={container}>
          <div className={leftSection}>
            <img src={shopLogo} alt="Logo of Shop" />
            <h3>Mano Super Market and the name</h3>
          </div>
          <div className={rightSection}>
            <div className={bagArea}>
              <div className={bag}>
                <span className={badge}>3</span>
                <img src={bagIcon} alt="Bag Icon" />
                <p>Bag</p>
              </div>
            </div>
            <div className={ordersArea}>
              <div className={orders}>
                <img src={ordersIcon} alt="Order Icon" />
                <p>Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={searchSection}>
        <input
          type="text"
          placeholder="Search for products..."
          className={input}
        />
      </div>
    </>
  );
}
