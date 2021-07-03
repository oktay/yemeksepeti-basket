import React, { useContext, useEffect, useState } from 'react';
import { BasketContext } from '../App';
import { priceFormatter } from '../lib';

import styles from './BasketProduct.module.scss';

function BasketProduct({ product }) {
  const { removeBasket, changeQty } = useContext(BasketContext);
  const [qty, setQty] = useState(product.qty);

  useEffect(() => {
    setQty(product.qty)
  }, [product.qty]);

  function handleBlur() {
    if(!qty) {
      setQty(product.qty);
    } else if(parseInt(qty) === 0) {
      removeBasket(product);
    } else {
      changeQty(product, parseInt(qty));
    }
  }

  return (
    <li className={styles.product}>
      <h4>{product.DisplayName}</h4>
      <div className={styles.actions}>
        <input type="number" min="0" max="99" value={qty} onChange={({ target }) => setQty(target.value)} onBlur={handleBlur} />
        <span>{priceFormatter.format(parseFloat(product.ListPrice) * product.qty)}</span>
        <button className={styles.remove} onClick={() => removeBasket(product)}>&times;</button>
      </div>
    </li>
  )
}

export default BasketProduct