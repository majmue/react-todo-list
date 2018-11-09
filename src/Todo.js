import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, onToggle } = this.props
    return (
      <li
        className="Todo"
        click={index => {
          onToggle(index)
        }}
      >
        {text}
      </li>
    )
  }
}

export default Todo
