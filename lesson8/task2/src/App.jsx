import React from "react";
import Clock from "./Clock";

class App extends React.Component {
  state = {
    visible: true // начальное состояние 
  }

  toggle = () => { // кнопка, которая спрячет все компоненты Clock
    this.setState({
      visible: !this.state.visible
    })

  }
  render() {
    return ( //отрисовка трех компонент для каждого города
      <div className="worltime">
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock location='New York' offset={-5} />}</div>
        <div>{this.state.visible && <Clock location='Kyiv' offset={2} />}</div>
        <div>{this.state.visible && <Clock location='London' offset={0} />}</div>
      </div>
    )

  }
}

export default App;