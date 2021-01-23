import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import ShopDesktop from './ShopDesktop';
import Dashboard from './Dashboard';

export default function App() {
  return (
    <div>
      <HashRouter>
        <Route path="/" exact>
          <ShopDesktop />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
      </HashRouter>
    </div>
  );
}
