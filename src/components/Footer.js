import React from 'react';

import freeDelivery from '../assets/images/icons-easyreturns.svg';
import support from '../assets/images/icons-support.svg';
import buyerProtection from '../assets/images/icons-protection.svg';
import chatWithUs from '../assets/images/chat-with-us.svg';
import squares from '../assets/images/sqaures.svg';

import {
  containerFluid,
  container,
  shopFeatures,
  storeDetails,
  storeName,
  storeAddress,
  contact,
  menu,
} from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={containerFluid}>
      <div className={container}>
        <section className={shopFeatures}>
          <section>
            <img src={freeDelivery} alt="Free delivery" />
            <p>
              Free Delivery <span>(above &#8377;500)</span>
            </p>
          </section>
          <section>
            <img src={buyerProtection} alt="Buyer Protection" />
            <p>Buyer Protection</p>
          </section>
          <section>
            <img src={support} alt="Customer Support" />
            <p>Customer Support</p>
          </section>
        </section>

        <hr />

        <section className={storeDetails}>
          <h2>STORE DETAILS</h2>
          <section>
            <address>
              <p className={storeName}>Mano Super Market</p>
              <p className={storeAddress}>
                Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru Karnataka
              </p>
            </address>
          </section>
        </section>

        <section className={contact}>
          <img src={chatWithUs} alt="Whatsapp Chat" />
        </section>
        <section className={menu}>
          <img src={squares} alt="menu" />
        </section>
      </div>
    </div>
  );
}
