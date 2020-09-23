import React from 'react';

const Message = ({ text }) => {
  if (!text) {  // убераем бордер(input) если ни одна из кнопок не используется
    return null;
  }
  return ( // передаем свойство text в компоненту Page для отрисовки текста
    <div className="message">
      {text}
    </div>
  );
};

export default Message;