import React from 'react';

import {
  container,
  imageSection,
  detailsSection,
  priceSection,
  itemImage,
  discountSection,
  discountedPriceSection,
  oldPrice,
  addButton,
  quantitySection,
} from '../styles/Item.module.css';

import plus from '../assets/images/icons-consumer-plus.svg';
import minus from '../assets/images/icons-consumer-minus.svg';

export default function Item({
  title,
  unit,
  price,
  discountedPrice,
  discountPercent,
  quantity,
  image,
}) {
  const getPrice = () => {
    if (!discountedPrice) {
      return <div className={discountedPriceSection}>&#8377;{price}</div>;
    }

    return (
      <div className={discountedPriceSection}>
        <div>&#8377;{discountedPrice}</div>
        <div className={oldPrice}>&#8377;{price}</div>
      </div>
    );
  };

  const getAddToCart = () => {
    if (!quantity) {
      return (
        <div className={addButton}>
          <span>ADD</span>
          <img src={plus} alt="add button" />
        </div>
      );
    }

    return (
      <div className={quantitySection}>
        <img src={minus} alt="minus button" />
        <span>{quantity}</span>
        <img src={plus} alt="plus button" />
      </div>
    );
  };

  return (
    <div className={container}>
      <section className={imageSection}>
        <img src={image} alt="Item" className={itemImage} />
        {discountPercent && discountPercent > 0 ? (
          <div className={discountSection}>{`${discountPercent}% OFF`}</div>
        ) : null}
      </section>
      <section className={detailsSection}>
        <h1>{title}</h1>
        <p>{unit} unit</p>
        <section className={priceSection}>
          <section>{getPrice()}</section>
          <section>{getAddToCart()}</section>
        </section>
      </section>
    </div>
  );
}
