import React from 'react';

import Cart from './Cart';
import Items from './Items';

import {
  container,
  main,
  categories,
  items,
  cart,
  bagHeader,
} from '../styles/ShoppingArea.module.css';

export default function ShoppingArea() {
  return (
    <div className={container}>
      <div className={main}>
        <section className={categories}></section>
        <section className={items}>
          <Items />
        </section>
        <section className={cart}>
          <Cart />
        </section>
      </div>
    </div>
  );
}
