import React from 'react';

import emptyBag from '../assets/images/illustrations-empty-grey.svg';

import { header, body, counter } from '../styles/Cart.module.css';

export default function Cart() {
  return (
    <div>
      <section className={header}>
        <h2>Bag</h2>
        <div className={counter}>0</div>
      </section>
      <section className={body}>
        <img src={emptyBag} alt="Empty Bag" />
        <h3>Your bag is empty</h3>
        <p>Looks like you haven't made your choice yet</p>
      </section>
    </div>
  );
}
