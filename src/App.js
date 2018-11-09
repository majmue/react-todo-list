import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'

class App extends Component {
  state = {
    todos: []
  }

  toogleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1)
    ]
    this.setState({ todos: newTodos })
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, isDone: false },
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
          {this.state.todos.map((todo, index) => {
            return (
              <Todo
                key={todo.text}
                text={todo.text}
                onToggle={() => this.toogleDone(index)}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default App
