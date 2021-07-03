import React from 'react';
import basketSVG from '../assets/img/basket.svg';

import styles from './Basket.module.scss';

function Basket() {
  return (
    <div className={styles.basket}>
      <div className={styles.header}>YEMEK SEPETİM</div>
      <div className={styles.address}>Boğaziçi Üniversitesi - Hisar Kampüsü</div>
      <div className={styles.content}>
        <div className={styles.empty}>
          <img src={basketSVG} />
          <strong>Sepetiniz Henüz Boş</strong>
        </div>
      </div>
    </div>
  )
}

export default Basket;