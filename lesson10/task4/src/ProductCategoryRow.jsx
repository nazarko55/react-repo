import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return ( // отрисовка данных в 2 колонки
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow;