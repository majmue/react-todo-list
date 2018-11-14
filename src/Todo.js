import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, onToggle, onDelete, done } = this.props
    return (
      <li className={done ? 'done' : undefined}>
        <span onClick={onToggle}>{text}</span>
        <button onClick={onDelete}>&times;</button>
      </li>
    )
  }
}

export default Todo
