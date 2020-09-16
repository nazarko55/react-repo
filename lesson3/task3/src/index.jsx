import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVK7xUD2P-8Dqt-CDb1JLDHzE_2yAns-AttA&usqp=CAU'
};

ReactDOM.render(
  < Comment
    user={userInfo}
    text="Good job!"
    date={new Date()}
  />,
  document.getElementById('root')
);