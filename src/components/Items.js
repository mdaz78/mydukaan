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
      id: 1,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 189,
      discountedPrice: 99,
      discountPercent: 30,
      quantity: 0,
      image: iceCream1,
    },
    {
      id: 2,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 1,
      image: iceCream2,
    },
    {
      id: 3,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream3,
      discountPercent: 30,
    },
    {
      id: 4,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream4,
    },
    {
      id: 5,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 6,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 7,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 8,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 9,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 10,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 189,
      discountedPrice: 99,
      discountPercent: 30,
      quantity: 0,
      image: iceCream1,
    },
    {
      id: 11,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 1,
      image: iceCream2,
    },
    {
      id: 12,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream3,
      discountPercent: 30,
    },
    {
      id: 13,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream4,
    },
    {
      id: 14,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 15,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 16,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 17,
      title: 'Kwality Walls Black Currant',
      unit: 1,
      price: 99,
      quantity: 0,
      image: iceCream5,
    },
    {
      id: 18,
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
          <Item key={item.id} {...item} />
        ))}
      </section>
    </div>
  );
}
