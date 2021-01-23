import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import ShopDesktop from './ShopDesktop';
import ShopMobile from './ShopMobile';
import Dashboard from './Dashboard';

export default function App() {
  const isMobileView = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = documentElement.getElementsByTagName('body')[0];
    const windowWidth =
      w.innerWidth || documentElement.clientWidth || body.clientWidth;

    console.log(windowWidth);
    return windowWidth <= 760;
  };

  return (
    <div>
      <HashRouter>
        <Route
          path="/"
          exact
          render={() => {
            if (isMobileView()) {
              return <ShopMobile />;
            }
            return <ShopDesktop />;
          }}
        ></Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </HashRouter>
    </div>
  );
}
