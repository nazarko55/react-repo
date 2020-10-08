import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // начальное состояние
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({ // меняем состояние с фильтрацией 
      filterText: filterText
    });
  }

  handleInStockChange = (inStockOnly) => {
    this.setState({ // меняем состояние товаров которые есть в наличии
      inStockOnly: inStockOnly
    })
  }

  render() {
    const { filterText, inStockOnly } = this.state;

    return ( // рендерим компоненту SearchBar и ProductTable с фильтрацией и товарами которые есть в наличии а также методы  
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          filterText={filterText}
          inStockOnly={inStockOnly}
          products={this.props.products} />
      </div>
    )
  }
}

export default FilterableProductTable;