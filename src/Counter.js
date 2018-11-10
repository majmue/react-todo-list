import React, { Component } from 'react'
import './Counter.css'

export class Counter extends Component {
  render() {
    return <h1 className="Counter">Todos done: {this.props.count}</h1>
  }
}

export default Counter
