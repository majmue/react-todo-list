import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, onToggle, onDelete } = this.props
    return (
      <li>
        <span onClick={onToggle} className="Todo">
          {text}
        </span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todo
