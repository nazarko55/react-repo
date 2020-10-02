import React, { Component } from 'react';
import Filter from './Filter';
import User from './User';

class UserList extends Component {
  state = {
    value: '',
  }

  handleChange = even => {
    this.setState({
      value: even.target.value

    })
  }
  render() {
    const users = this.props.users;
    const resultUserlist = (this.state.value === ''
      ? users
      : users.filter(user => user.name.toLowerCase()
        .includes(this.state.value.toLowerCase())))
      .map(
        user => <User key={user.id}
          name={user.name}
          age={user.age} />
      );
    return (
      <>
        <Filter
          filterText={this.state.value}
          count={resultUserlist.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {resultUserlist}
        </ul>
      </>
    )
  }
}

export default UserList;