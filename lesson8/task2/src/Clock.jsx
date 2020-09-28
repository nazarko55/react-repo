import React, { Component } from 'react';
import moment from 'moment';


const setOffset = (offset) => {
  return moment()
    .utcOffset(offset)
    .format("h:mm:ss a")
}


class Clock extends Component {

  constructor(props) {
    super(props) //инициализация нашего компонента
    this.state = {
      time: setOffset(this.props.offset),
    };
  }
  componentDidMount() { //вызываем после рендеринга компонента
    this.intervalId = setInterval(() => {
      this.setState({
        time: setOffset(this.props.offset),
      });
    }, 1000)
  }

  componentWillUnmount() { //вызываем перед удалением компонента из DOM
    clearInterval(this.intervalId);
  }


  render() {   // рендер времени и места
    return (
      <div className="clock">
        <div className="clock_location">{this.props.location}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    )
  }
}

export default Clock;