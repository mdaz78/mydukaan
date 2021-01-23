import React from 'react';

import Header from './Header';
import DesktopNavbar from './DesktopNavbar';
import ShoppingArea from './ShoppingArea';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Header />
      <DesktopNavbar />
      <ShoppingArea />
      <Footer />
    </div>
  );
}
