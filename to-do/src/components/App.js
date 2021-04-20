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
  handleUpdateTodo = ( updatedTodo ) => {
    this.setState({
      todos: this.state.todos.map(
        todo => (todo.id === updatedTodo.id ? updatedTodo : todo)
      )
    })
  }
  handleDeleteTodo = ( todoId ) => {
    this.setState({
      todos: this.state.todos.filter( (value) => value.id !== todoId )
    });
  }

  handleGetEditableTodo = () => ( this.state.todos.filter( (todo) => todo.id === this.state.editableTodo )[0] );

  handleSetEditableTodo = (todoId) => {
    this.setState({
      editableTodo: todoId
    })
  }
  render(
    {todos, users, editableTodo} = this.state
  ) {
    return (
      <div className="App">
        <TodoBoard 
          todos = {todos}
          deleteTodoHandler = {this.handleDeleteTodo}
          setEditableTodoHandler = {this.handleSetEditableTodo}
          isEdit = {editableTodo}
        />
        <TodoForm 
          users = {users} 
          createTodoHandler = {this.handleCreateTodo}
          updateTodoHandler = {this.handleUpdateTodo}
          getEditableTodoHandler = {this.handleGetEditableTodo()}
          setEditableTodoHandler = {this.handleSetEditableTodo}
        />
      </div>
    );
  }
}

export default App;