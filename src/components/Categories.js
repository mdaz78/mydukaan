import React from 'react';

import { container, li } from '../styles/Categories.module.css';

import Arrow from '../assets/images/arrow.svg';

export default function Categories() {
  const categoryList = [
    {
      id: 1,
      name: 'Bestsellers',
      quantity: 10,
    },
    {
      id: 2,
      name: 'Pizza Specials',
      quantity: 21,
    },
    {
      id: 3,
      name: 'Singles Value Combos',
      quantity: 311,
    },
    {
      id: 4,
      name: 'Match Combos',
      quantity: 191,
    },
    {
      id: 5,
      name: 'Pastas by Firangi Bake',
      quantity: 31,
    },
    {
      id: 6,
      name: 'Midnight Sale',
      quantity: 59,
    },
  ];

  const getCategoryJSX = ({ id, name, quantity }) => {
    return (
      <li className={li} key={id}>
        {name} ({quantity})
      </li>
    );
  };

  return (
    <ul className={container}>
      {categoryList.map((category) => getCategoryJSX(category))}
      <li className={li}>
        View all Categories <img src={Arrow} alt="arrow" />
      </li>
    </ul>
  );
}
