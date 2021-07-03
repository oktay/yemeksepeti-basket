import React, { useContext } from 'react';
import { BasketContext } from '../App';
import { priceFormatter } from '../lib';
import { sum } from 'lodash'

import basketSVG from '../assets/img/basket.svg';
import styles from './Basket.module.scss';
import BasketProduct from './BasketProduct';

function Basket() {
  const { basket } = useContext(BasketContext);
  const basketTotal = sum(basket.map((item) => parseFloat(item.ListPrice) * item.qty));

  return (
    <div className={styles.basket}>
      <div className={styles.header}>YEMEK SEPETİM</div>
      <div className={styles.address}>Boğaziçi Üniversitesi - Hisar Kampüsü</div>
      <div className={styles.content}>
        {!basket.length ? <div className={styles.empty}>
          <img src={basketSVG} />
          <strong>Sepetiniz Henüz Boş</strong>
        </div> : <div>
          <ul className={styles.list}>
            {basket.map((item) => <BasketProduct key={item.ProductId} product={item} />)}
          </ul>
          <div className={styles.total}><span>Toplam</span> <span>{priceFormatter.format(basketTotal)}</span></div>
        </div>}
      </div>
    </div>
  )
}

export default Basket;