import React from 'react';

import {
  container,
  main,
  categories,
  items,
  bag,
} from '../styles/ShoppingArea.module.css';

export default function ShoppingArea() {
  return (
    <div className={container}>
      <div className={main}>
        <section className={categories}></section>
        <section className={items}></section>
        <section className={bag}></section>
      </div>
    </div>
  );
}
