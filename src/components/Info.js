import React from 'react';
import restoranData from '../assets/data/restoranData.json';
import { Price, Motor } from './icons';
import { priceFormatter } from '../lib';

import styles from './Info.module.scss';

function Info() {
  const restoran = restoranData.d.ResultSet;
  const address = restoran.DeliveryAreas[0]

  return (
    <div className={styles.info} style={{ backgroundImage: `url("https://cdn.yemeksepeti.com/App_Themes/SiteHeaders/${restoran.ResturantCuisines[0].ImagePath}")` }}>
      <img className={styles.logo} src={"https://cdn.yemeksepeti.com" + restoran.ImagePath} />
      <div className={styles.detail}>
        <h1 className={styles.title}>{restoran.DisplayName}</h1>
        <div className={styles.about}>
          <div className={styles.ranks}>
            <div className={styles.rank}>
              <span>Hız</span>
              <strong>{restoran.Speed}</strong>
            </div>
            <div className={styles.rank}>
              <span>Servis</span>
              <strong>{restoran.Serving}</strong>
            </div>
            <div className={styles.rank}>
              <span>Lezzet</span>
              <strong>{restoran.Flavour}</strong>
            </div>
          </div>
          <div className={styles.specs}>
            <div className={styles.spec}>
              <Price />
              <span>Min. Tutar</span>
              <strong>{priceFormatter.format(address.MinimumPrice)}</strong>
            </div>
            <div className={styles.spec}>
              <Motor />
              <span>Servis Süresi</span>
              <strong>{address.DeliveryTime} dk.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info