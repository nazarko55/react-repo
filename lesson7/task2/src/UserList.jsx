import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul className="users">
      {users.map(user => {
        <li className="user">
          <span className="user__name">{user.name}</span>
          <span className="user__age">{user.age}</span>
        </li>
      })}
    </ul>
  )
}

export default UserList;