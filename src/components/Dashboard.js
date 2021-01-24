import React from 'react';

import logoImg from '../assets/images/logo.svg';
import homeImg from '../assets/images/icons_navbar_home_active.svg';
import ordersImg from '../assets/images/icons_navbar_orders_inactive.svg';
import productsImg from '../assets/images/icons_navbar_catalogue_inactive.svg';
import marketingImg from '../assets/images/icons_navbar_marketing_inactive.svg';
import accountImg from '../assets/images/icons_navbar_account_inactive.svg';
import verify from '../assets/images/icons_verify.svg';
import downArrow from '../assets/images/icons_arrow.svg';
import whatsApp from '../assets/images/whatsapp.svg';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';

import {
  container,
  menuBar,
  dashboard,
  logo,
  menuItemsContainer,
  menuItem,
  badge,
  chatContainer,
  topBar,
  questionMark,
  helpContainer,
  title,
  shareStoreLink,
  dashboardContainer,
  countsContainer,
  intro,
  counts,
  orders,
  sales,
  storeViews,
  productViews,
  shareVia,
  socialLinks,
  activeOrdersContainer,
  activeCounts,
} from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={container}>
      <section className={menuBar}>
        <img src={logoImg} alt="Logo" className={logo} />
        <ul className={menuItemsContainer}>
          <li className={menuItem}>
            <img src={homeImg} alt="Home" />
            <p>Home</p>
          </li>
          <li className={menuItem}>
            <img src={ordersImg} alt="Orders" />
            <p>Orders</p>
            <div className={badge}>2</div>
          </li>
          <li className={menuItem}>
            <img src={productsImg} alt="Products" />
            <p>Products</p>
          </li>
          <li className={menuItem}>
            <img src={marketingImg} alt="Marketing" />
            <p>Marketing</p>
          </li>
          <li className={menuItem}>
            <img src={accountImg} alt="Account" />
            <p>Account</p>
          </li>
        </ul>

        <section className={chatContainer}>
          <p>Need any help?</p>
          <p>Chat with us</p>
        </section>
      </section>
      <section className={dashboard}>
        <section className={topBar}>
          <div className={title}>
            <h2>Mano Super Market</h2>
            <img src={verify} alt="tick-mark" />
          </div>
          <div className={helpContainer}>
            {/* <div className={pointer}></div> */}
            <div className={questionMark}>?</div>
            <p>How to use</p>
          </div>
        </section>
        <section className={dashboardContainer}>
          <section className={shareStoreLink}>
            <h2>Share Store Link</h2>
            <select id="time" name="time">
              <option value="Last Month">Last Month</option>
              <option value="Last Year">Last Year</option>
            </select>
            <img src={downArrow} alt="Down Arrow" />
          </section>
          <section className={countsContainer}>
            <section className={intro}>
              <p>
                Your customers can view your online store and place the orders
                from this link.
              </p>
              <a href="mydukaa.io/manosupermarket">
                mydukaa.io/manosupermarket
              </a>
              <p className={shareVia}>Share via</p>
              <div className={socialLinks}>
                <img src={whatsApp} alt="WhatsApp" />
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
              </div>
            </section>
            <section className={counts}>
              <div className={orders}>
                <p>ORDERS</p>
                <p>192</p>
              </div>
              <div className={sales}>
                <p>TOTAL SALES</p>
                <p>&#8377;1,55,920</p>
              </div>
              <div className={storeViews}>
                <p>STORE VIEWS</p>
                <p>96</p>
              </div>
              <div className={productViews}>
                <p>PRODUCT VIEWS</p>
                <p>2,313</p>
              </div>
            </section>
          </section>
          <section className={activeOrdersContainer}>
            <h2>Active Orders</h2>
            <section className={activeCounts}>
              <div>
                <p>Pending (12)</p>
              </div>
              <div>
                <p>Accepted (33)</p>
              </div>
              <div>
                <p>Shipped (121)</p>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
