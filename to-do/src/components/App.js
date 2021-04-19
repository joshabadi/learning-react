import React, { Component } from 'react';
import {todoData, userData} from '../sampleData.js';
import TodoForm from './TodoForm.js';
import TodoBoard from './TodoBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
      users: userData,
      editableTodo: null
    }
  }
  handleCreateTodo = ( todo ) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  handleUpdateTodo = ( todo ) => {
    const todoIndex = this.state.todos.findIndex(element => element.id === todo.id),
          newTodoList = [...this.state.todos];
          
    newTodoList[todoIndex] = todo;

    this.setState({
      todos: [...newTodoList]
    });
  }
  handleDeleteTodo = ( todoId ) => {
    this.setState({
      todos: this.state.todos.filter(( value ) => {
        return value.id !== todoId;
      })
    });
  }
  handleGetEditableTodo = ( todoId ) => {
    return this.state.todos.filter(( todo ) => {
      return todo.id === todoId;
    })[0];
  }
  handleSetEditableTodo = (todoId) => {
    this.setState({
      editableTodo: todoId
    })
  }
  render(
    {todos, users} = this.state
  ) {
    console.log( this.state.editableTodo );
    return (
      <div className="App">
        <TodoBoard 
          todos = {todos}
          deleteTodoHandler = {this.handleDeleteTodo}
          setEditableTodoHandler = {this.handleSetEditableTodo}
          isEdit = {Boolean(this.state.editableTodo != null)}
        />
        <TodoForm 
          users = {users} 
          createTodoHandler = {this.handleCreateTodo}
          updateTodoHandler = {this.handleUpdateTodo}
          getEditableTodoHandler = {this.handleGetEditableTodo( this.state.editableTodo )}
          setEditableTodoHandler = {this.handleSetEditableTodo}
        />
      </div>
    );
  }
}

export default App;