import React from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="1">
        {category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow;