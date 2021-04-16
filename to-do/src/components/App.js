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
      form: {
        title: '',
        username: '',
        profilePicture: '',
        description: '',
        isEdit: false,
        todoId: ''
      },
      filtering: false
    }
  }
  handleFormChange = (element, e) => {
    const currentState = { ...this.state }; // grab a copy of current state and set to a new var
    currentState['form'][element] = e.target.value; // set the associated form key state value to that of the target element
    this.setState( currentState );
  }
  createOrUpdate = ( action, e ) => {
    e.preventDefault();
    if ( action === 'create' ) {
      this.createTodo();
    } else if ( action === 'update' ) {
      this.updateTodo();
    }
  }
  createTodo = () => {
    const currentState = {...this.state}; // grab a copy of current state and set to a new var
    currentState.todos.unshift( {...currentState.form} ); //add the todo to the beginning of the todo array
    this.setState( currentState, () => {
      this.resetTodoForm();
    });
  }
  updateTodo = () => {
    const currentState = {...this.state}; // grab a copy of current state and set to a new var
    currentState.todos[currentState['form']['todoId']] = {...currentState.form};
    this.setState( currentState, () => {
      this.resetTodoForm();
    });
  }
  deleteTodo = (todoId) => {
    const currentState = {...this.state}; // grab a copy of current state and set to a new var
    delete currentState['todos'][todoId]; // remove the object at the array index which cooresponds to the todoId
    this.setState( currentState );
  }
  editTodo = (todoId, todo) => {
    const currentState = {...this.state}; // grab a copy of current state and set to a new var
    currentState['form'] = {...todo};
    currentState['form']['isEdit'] = true;
    currentState['form']['todoId'] = todoId;
    this.setState(currentState);
  }
  cancelEdit = () => {
    this.resetTodoForm();
  }
  resetTodoForm = () => {
    const currentState = {...this.state}; // grab a copy of current state and set to a new var
    currentState['form'] = { // reset the values of the form to an empty string and set editing to false
      title: '',
      username: '',
      profilePicture: '',
      description: '',
      isEdit: false,
      noteId: ''
    }
    this.setState( currentState );
  }
  render() {
    return (
      <div className="App">
        <TodoBoard 
          todos = {this.state.todos}
          deleteTodo = {this.deleteTodo}
          editTodo = {this.editTodo}
          filterTodos = {this.filterTodos}
          isFiltering = {this.state.filtering}
          isEdit = {this.state.form.isEdit}
        />
        <TodoForm 
          formData = {this.state.form} 
          users = {this.state.users} 
          handleChange = {this.handleFormChange} 
          createOrUpdate = {this.createOrUpdate}
          cancelEdit = {this.cancelEdit} 
        />
      </div>
    );
  }
}

export default App;
