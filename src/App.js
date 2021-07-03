import React, { createContext, useState } from 'react';
import Header from './components/Header'; 
import Basket from './components/Basket';
import List from './components/List';
import Layout from './components/Layout';
import Info from './components/Info';

import 'normalize.css';
import './assets/global.scss';

export const BasketContext = createContext();

export default function App() {
  const [basket, setBasket] = useState([]);

  function addBasket(product, qty) {
    const exist = basket.find((item) => item.ProductId === product.ProductId);

    if(exist) {      
      exist.qty = exist.qty + qty;
      setBasket((basket) => [...basket]);
    }else {
      setBasket((basket) => [...basket, {...product, qty}]);
    }
  }

  function removeBasket(product) {
    setBasket((basket) => basket.filter((item) => item.ProductId !== product.ProductId))
  }

  function changeQty(product, qty) {
    basket.find((item) => item.ProductId === product.ProductId).qty = qty;
    setBasket((basket) => [...basket]); 
  }
  
  return (
    <BasketContext.Provider value={{basket, addBasket, removeBasket, changeQty}}>
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
