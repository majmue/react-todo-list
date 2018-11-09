import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text } = this.props
    return <li className="Todo">{text}</li>
  }
}

export default Todo
