import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTask extends Component {
  state = {
    value: '',
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({ value: '' });
  }
  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input"
        />
        <button className="btn create-task__btn"
          onClick={this.onCreateTask}
        >Create</button>

      </div>
    )
  }
}

CreateTask.propTypes = {
  createTask: PropTypes.func.isRequired
};


export default CreateTask;

//1. text in input 
//2. create task with this text 
//3. Add created task to the list