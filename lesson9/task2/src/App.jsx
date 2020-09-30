import React, { Component } from 'react';
import UserForm from './UserForm';

class App extends Component {


  createUser(userObj) {
    event.preventDefault();
    console.log(userObj);
  };

  render() {
    return (
      <UserForm onSubmit={this.createUser} />
    )
  }
}

export default App;