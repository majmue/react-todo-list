import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, onClickFunction } = this.props

    return <li className="Todo">{text}</li>
  }
}

export default Todo
