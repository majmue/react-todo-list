import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <input
          placeholder="Add your todo in the list"
          className="Input"
          onKeyUp={event => {
            this.props.handleKeyup(event)
          }}
        />
      </div>
    )
  }
}

export default Input
