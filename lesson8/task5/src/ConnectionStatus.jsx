import React, { Component } from 'react';

class ConnectionStatus extends React.Component {
  state = {
    status: 'online', // По умолчанию - online
  }
  componentDidMount() { // подписаться на событие online/offline
    window.addEventListener('online', this.ToggleStatus);
    window.addEventListener('offline', this.ToggleStatus);
  };

  componentWillUnmount() { // отписться перед тем как компонента удалится со страницы
    window.removeEventListener('online', this.ToggleStatus);
    window.removeEventListener('offline', this.ToggleStatus);
  };

  ToggleStatus = even => {
    this.setState({
      status: even.type
    })
  }

  render() {
    console.log(this.props);
    const statusChange = this.state.status === 'offline'
      ? "status_offline" // если офлайн,добавляем класс status_offline
      : ""; // если онлайн ничего не добавляем  
    return (
      <div className={`status ${statusChange}`}>{this.state.status}</div>
    )
  }
}

export default ConnectionStatus;