import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'

class App extends Component {
  state = {
    todos: [
      { text: 'Geschenke besorgen', done: false },
      { text: 'Plätzchen backen', done: false },
      { text: 'Weihnachtsbaum aussuchen', done: false }
    ]
  }
  render() {
    return (
      <div className="App">
        <Input />
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
