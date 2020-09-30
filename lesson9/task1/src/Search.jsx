import React, { Component } from 'react';

class Search extends Component {
  state = { value: '' }

  handleChange = event => { // на каждом изменении вызываем handleChange
    this.setState({ // и записывается в стейт новое значение инпута
      value: event.target.value
    })
    console.log(this.state.value);
  }

  searchAlert = (event) => {
    event.preventDefault();// отменяем дефолтное поведение формы, без перещагрузки страницы
    alert(`Search text: ${this.state.value}`)// выводим нужную информацию в алерт 
  }
  render() {
    return (
      <form className="search"
        onSubmit={this.searchAlert}>
        <input type="text"
          onChange={this.handleChange} // записываем в стейт каждое новое значения инпута 
          value={this.state.value}
          className="search__input" />
        <button className="search__button" type="submit">
          Search
          </button>
      </form>
    )
  }
}

export default Search;