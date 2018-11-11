import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Add your todo in the list"
          className="Input"
          onKeyUp={event => {
            this.props.keyupfunction(event)
          }}
        />
      </div>
    )
  }
}

export default Input
