import React from 'react';

// input array
// output array 

//algo
//1. создаем елемент mailbox
//2. внутри которого будет отображаться сообщение и счетчик
//2. проверяем если unreadMessages > 0 мы отрисовуем елемент mailbox__count.
//3. если unreadMessages < 0 (false) тогда ничего не отрисовуем.

const Mailbox = ({ unreadMessages }) => {
  console.log(unreadMessages);
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadMessages.length > 0 && (
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  );
}
export default Mailbox;