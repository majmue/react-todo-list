import React, { Component } from 'react'
import './App.css'

import Todo from './Todo'
import Input from './Input'
import Counter from './Counter'
import Header from './Header'
import Separator from '.Separator'

class App extends Component {
  state = {
    todos: this.load()
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1)
    ]
    this.setState({ todos: newTodos })
  }

  deleteTodo = index => {
    const { todos } = this.state
    const newDelete = [...todos.slice(0, index), ...todos.slice(index + 1)]
    this.setState({ todos: newDelete })
  }

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newEntry = [
        { text: event.target.value, isDone: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newEntry
      })
      event.target.value = ''
    }
  }

  render() {
    const countTodos = this.state.todos.filter(todos => todos.isDone).length
    this.save()
    return (
      <div className="App">
        <Header />
        <Counter count={countTodos} />
        <Input handleKeyup={this.addTodoArray} />
        <Separator text="TODO" />
        {this.renderOpenTodos()}
        <Separator text="DONE" />
        {this.renderDoneTodos()}
      </div>
    )
  }

  renderOpenTodos() {
    return this.state.todos
      .filter(todo => !todo.done)
      .map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          className={this.state.todos[index].isDone ? 'Todo done' : 'Todo'}
          onToggle={() => this.toggleTodo(index)}
          onDelete={() => this.deleteTodo(index)}
        />
      ))
  }

  renderDoneTodos() {
    return this.state.todos
      .filter(todo => todo.done)
      .map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          done={todo.done}
          onToggle={() => this.toggleTodo(index)}
          onDelete={() => this.deleteTodo(index)}
        />
      ))
  }

  save() {
    localStorage.setItem('todo-app--xmas', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--xmas')) || []
    } catch (err) {
      return []
    }
  }
}
export default App
