import React from 'react';

import Header from './Header';
import Navbar from './Navbar';
import ShoppingArea from './ShoppingArea';
import Footer from './Footer';

export default function ShopDesktop() {
  return (
    <div>
      <Header />
      <Navbar />
      <ShoppingArea />
      <Footer />
    </div>
  );
}
