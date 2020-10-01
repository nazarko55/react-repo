import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {


  createUser(formData) {
    event.preventDefault();
    console.log(formData);
  };

  render() {
    return (
      <UserForm onSubmit={this.createUser} />
    )
  }
}

export default App;