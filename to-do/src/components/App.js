import React, { Component } from 'react';
import {todoData, userData} from '../sampleData.js';
import TodoForm from './TodoForm.js';
import TodoBoard from './TodoBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
      users: userData
    }
  }
  handleCreateTodo = ( todo ) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  // updateTodo = () => {
  //     const currentState = {...this.state}; // grab a copy of current state and set to a new var
  //     currentState.todos[currentState['form']['todoId']] = {...currentState.form};
  //     this.setState( currentState );
  // }
  handleDeleteTodo = ( todoId ) => {
    this.setState({
      ...this.state.todos,
      todos: this.state.todos.filter(( value ) => {
        return value.id !== todoId;
      })
    });
  }
  // handleEditTodo = (todoId) => {
  //   this.setState({
  //     editableTodo: todoId
  //   })
  // }
  render() {
    return (
      <div className="App">
        <TodoBoard 
          todos = {this.state.todos}
          deleteTodoHandler = {this.handleDeleteTodo}
          editTodoHandler = {this.handleEditTodo}
          // isEdit = {Boolean(typeof this.state.editableTodo != 'undefined')}
        />
        <TodoForm 
          users = {this.state.users} 
          createTodoHandler = {this.handleCreateTodo}
          // todoId = {this.state.editableTodo}
          // editableTodoHandler = {this.state.todos.filter(( todo ) => {
          //   return todo.id === this.state.editableTodo
          // })}
        />
      </div>
    );
  }
}

export default App;
