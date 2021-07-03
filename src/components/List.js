import React from 'react';
import menuData from '../assets/data/menuData.json';

import styles from './List.module.scss';
import ProductCard from './ProductCard';

function List() {
  const categories = menuData.d.ResultSet;

  return (
    <div>
      {categories.map(category => <div className={styles.category} key={category.CategoryName}>
        <b className={styles.head}>{category.CategoryDisplayName}</b>
        {category.Products.map(product => <ProductCard key={product.ProductId} product={product} />)}
      </div>)}
    </div>
  )
}

export default List;