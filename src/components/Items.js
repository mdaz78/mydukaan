import React from 'react';

import Item from './Item';

import { header, counter, body, container } from '../styles/Items.module.css';

import iceCream1 from '../assets/images/ice-creams/ice-cream-1.png';
import iceCream2 from '../assets/images/ice-creams/ice-cream-2.png';
import iceCream3 from '../assets/images/ice-creams/ice-cream-3.png';
import iceCream4 from '../assets/images/ice-creams/ice-cream-4.png';
import iceCream5 from '../assets/images/ice-creams/ice-cream-5.png';

export default function Items() {
  const items = [
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 189,
      discountedPrice: 99,
      discountPercent: 30,
      quantity: 0,
      image: iceCream1,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 1,
      image: iceCream2,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream3,
      discountPercent: 30,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream4,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 189,
      discountedPrice: 99,
      discountPercent: 30,
      quantity: 0,
      image: iceCream1,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 1,
      image: iceCream2,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream3,
      discountPercent: 30,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream4,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },

    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
  ];

  return (
    <div className={container}>
      <section className={header}>
        <h2>Bestsellers</h2>
        <div className={counter}>10</div>
      </section>
      <section className={body}>
        {items.map((item) => (
          <Item {...item} />
        ))}
      </section>
    </div>
  );
}
