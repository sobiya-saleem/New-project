import React, { Component } from 'react';

import '../App.css';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    inputValue: "",
    Todos: []
  }
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value })
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const Todos = this.state.Todos;
    const TodoList = {
      value: (this.state.inputValue),
      done: false
    }
    if (this.state.inputValue) {
      Todos.push(TodoList);
      this.setState({ Todos, inputValue: '' })
    }


   

  }
  handleClick = (index) => {
    const Todos = this.state.Todos;
    Todos[index].done = !Todos[index].done;
    this.setState({ Todos })
  }
  render() {
    return (
      <div className="App">
        <h1>TODO TASK</h1>
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}

        />
        <List
          handleClick={this.handleClick}
          Todos={this.state.Todos} />
      </div>
    )
  }


}






export default App;
