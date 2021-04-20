import React, { Component } from "react";
import { todoData, userData } from "../sampleData.js";
import TodoForm from "./TodoForm.js";
import TodoBoard from "./TodoBoard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
      users: userData,
      editableTodoID: null,
    };
  }
  handleCreateTodo = (todo) => {
    this.setState(
      {
        todos: [todo, ...this.state.todos],
      },
      () => this.handleCancelUpdate()
    );
  };
  handleUpdateTodo = (updatedTodo) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
      editableTodoID: null,
    });
  };
  handleDeleteTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.filter((value) => value.id !== todoId),
    });
  };
  handleCancelUpdate = () => {
    this.setState({
      editableTodoID: null,
    });
  };

  handleGetEditableTodo = () =>
    this.state.todos.filter((todo) => todo.id === this.state.editableTodoID)[0];

  handleSetEditableTodo = (todoId) => {
    this.setState({
      editableTodoID: todoId,
    });
  };
  render({ todos, users, editableTodoID } = this.state) {
    return (
      <div className="App">
        <TodoBoard
          todos={todos}
          deleteTodoHandler={this.handleDeleteTodo}
          setEditableTodoHandler={this.handleSetEditableTodo}
          isEdit={editableTodoID !== null}
        />
        <TodoForm
          users={users}
          createTodoHandler={this.handleCreateTodo}
          updateTodoHandler={this.handleUpdateTodo}
          editableTodo={this.handleGetEditableTodo()}
          cancelUpdateHandler={this.handleCancelUpdate}
        />
      </div>
    );
  }
}

export default App;
