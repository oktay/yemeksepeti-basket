import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Plus } from './icons';

import styles from './ProductCard.module.scss';

function ProductCard({ product }) {
  const priceFormatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  });

  const [qty, setQty] = useState(1);

  return (
    <div className={styles.card}>
      <div className={styles.actions}>
        <InputMask mask="9" value={qty} onChange={({ target }) => setQty(target.value)} placeholder="">
          {(inputProps) => <input {...inputProps} type="text" />}
        </InputMask>
        <button><Plus /></button>
      </div>
      <div className={styles.detail}>
        <h4>{product.DisplayName}</h4>
        <p>{product.Description}</p>
      </div>
      <span className={styles.price}>{priceFormatter.format(parseFloat(product.ListPrice))}</span>
    </div>
  )
}

export default ProductCard