import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Add your Todo in the List"
        className="Input"
      />
    )
  }
}

export default Input
