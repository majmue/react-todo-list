import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'

class App extends Component {
  state = {
    todos: []
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="App">
        <Input keyupfunction={this.addTodoArray} />
        <div>
          {this.state.todos.map(todo => (
            <Todo key={todo.text} text={todo.text} />
          ))}
        </div>
      </div>
    )
  }
}
export default App
