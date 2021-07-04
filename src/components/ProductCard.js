import React, { useContext, useState } from 'react';
import { Plus } from './icons';
import { BasketContext } from '../App';
import { priceFormatter } from '../lib';

import styles from './ProductCard.module.scss';

function ProductCard({ product }) {

  const [qty, setQty] = useState(1);
  const { addBasket } = useContext(BasketContext);

  function handleChange({ target }) {
    if (target.value > 99) {
      setQty(99);
    } else if (target.value < 1) {
      setQty(1);
    } else {
      setQty(parseInt(target.value))
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.actions}>
        <input value={qty} onChange={handleChange} type="number" />
        <button onClick={() => addBasket(product, qty)}><Plus /></button>
      </div>
      <div className={styles.detail}>
        <h4>{product.DisplayName}</h4>
        <p>{product.Description}</p>
      </div>
      <strong className={styles.price}>{priceFormatter.format(parseFloat(product.ListPrice))}</strong>
    </div>
  )
}

export default ProductCard