import React, { createContext, useState } from 'react';
import Header from './components/Header'; 
import Basket from './components/Basket';
import List from './components/List';

import 'normalize.css';
import './assets/global.scss';
import Layout from './components/Layout';
import Info from './components/Info';

export const BasketContext = createContext();

export default function App() {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={{basket, setBasket}}>
      <Header />
      <Layout>
        <Basket />
        <div>
          <Info />
          <List />
        </div>
      </Layout>
    </BasketContext.Provider>
  );
}
