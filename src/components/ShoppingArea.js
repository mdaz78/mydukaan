import React from 'react';

import Cart from './Cart';
import Items from './Items';
import Categories from './Categories';

import {
  container,
  main,
  categories,
  items,
  cart,
} from '../styles/ShoppingArea.module.css';

export default function ShoppingArea() {
  return (
    <div className={container}>
      <div className={main}>
        <section className={categories}>
          <Categories />
        </section>
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
