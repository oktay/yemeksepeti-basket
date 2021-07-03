import React from 'react';
import menuData from '../assets/data/menuData.json';

function List() {
  const categories = menuData.d.ResultSet;
  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  });

  return (
    <div>
      {categories.map(category => <ul key={category.CategoryName}>
        <b>{category.CategoryDisplayName}</b>
        {category.Products.map(product => <li key={product.ProductId}>{product.DisplayName} {formatter.format(parseFloat(product.ListPrice))}</li>)}
      </ul>)}
    </div>
  )
}

export default List;