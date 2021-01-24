import React from 'react';

import Header from './Header';
import TopBar from './TopBar';
import BestSellers from './BestSellers';
import Footer from './Footer';
import Menu from './Menu';

export default function ShopMobile() {
  return (
    <div>
      <Header />
      <TopBar />
      <BestSellers />
      <Footer />
      <Menu />
    </div>
  );
}
