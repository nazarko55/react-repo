import React from 'react';
import UserAvatar from './UserAvatar';

import 'userinfo.scss';

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <UserAvatar name={props.user.name} avatarUrl={props.user.avatarUrl} />
      <div className="user-info__name">
        {props.user.name}
      </div>
    </div>
  );
};

export default UserInfo;