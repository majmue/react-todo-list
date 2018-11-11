import React, { Component } from 'react'
import './Counter.css'

class Counter extends Component {
  render() {
    return <h1 className="Counter">Done: {this.props.count}</h1>
  }
}

export default Counter
