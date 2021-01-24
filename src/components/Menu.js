import React from 'react';

import homeImg from '../assets/images/navicons-home-active.svg';
import bagImg from '../assets/images/navicons-bag-inactive.svg';
import orderImg from '../assets/images/navicons-orders-inactive.svg';

import {
  containerFluid,
  container,
  home,
  bag,
  order,
  badge,
} from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <div className={containerFluid}>
      <div className={container}>
        <section className={home}>
          <img src={homeImg} alt="Home" />
          <p>Home</p>
        </section>
        <section className={bag}>
          <span className={badge}>3</span>
          <img src={bagImg} alt="Bag" />
          <p>Bag</p>
        </section>
        <section className={order}>
          <img src={orderImg} alt="Order" />
          <p>Orders</p>
        </section>
      </div>
    </div>
  );
}
