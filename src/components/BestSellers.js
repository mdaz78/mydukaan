import React from 'react';

import Items from '../components/Items';

import homeFoods from '../assets/images/homeFoods.jpg';
import iceCream from '../assets/images/iceCreams.jpg';
import salad from '../assets/images/ice-creams/ice-cream-3.png';
import arrowBlack from '../assets/images/arrow-black.svg';

import {
  container,
  bestSellersContainer,
  bestSeller,
  imageSection,
  overlay,
  items,
  allProductsContainer,
  allProducts,
} from '../styles/BestSellers.module.css';

export default function BestSellers() {
  const bestSellingItems = [
    { id: 1, img: iceCream, name: 'Ice Creams' },
    { id: 2, img: homeFoods, name: 'Home Food' },
    { id: 3, img: salad, name: 'Fruit Salad' },
  ];

  return (
    <div className={container}>
      <h2>Bestsellers</h2>
      <section className={bestSellersContainer}>
        {bestSellingItems.map(({ id, img, name }) => (
          <div key={id} className={bestSeller}>
            <div className={imageSection}>
              <img src={img} alt="Food" />
              <div className={overlay}></div>
            </div>
            <p>{name}</p>
          </div>
        ))}
      </section>
      <section className={items}>
        <Items />
      </section>
      <div className={allProductsContainer}>
        <section className={allProducts}>
          <p>SEE ALL PRODUCTS</p>
          <img src={arrowBlack} alt="Arrow" />
        </section>
      </div>
    </div>
  );
}
