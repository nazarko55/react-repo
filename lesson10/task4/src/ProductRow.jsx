import React from "react";

const ProductRow = ({ product }) => {
  const name = product.stocked // отображаем товары, если товаров которые запросил пользователь нет отображаем их в красном цвете
    ? product.name
    : <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return ( // цена название товара
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow;