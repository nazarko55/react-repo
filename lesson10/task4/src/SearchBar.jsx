import React, { Component } from 'react';

const SearchBar = ({ filterText, onFilterTextChange, onInStockChange, inStockOnly }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)} // делаем обработчик событие и следим за тем что вводит пользователь 
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockChange(e.target.value)} // если пользователь активирует чекбокс мы показываем только товары в наличии
        />
        {"  "}
        Only show products in stock
      </p>
    </form>
  )
};

export default SearchBar;