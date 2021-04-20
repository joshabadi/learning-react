import React, { useState } from "react";
import { todoData, userData } from "../sampleData.js";
import TodoForm from "./TodoForm.js";
import TodoBoard from "./TodoBoard.js";

export const App = () => {
  const [todos, setTodos] = useState(todoData);
  const [users, setUsers] = useState(userData);
  const [editableTodoID, setEditableTodoID] = useState(null);

  const handleCreateTodo = (todo) => {
    setTodos([todo, ...todos]);
    setEditableTodoID(null);
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEditableTodoID(null);
  };

  const handleDeleteTodo = (todoID) =>
    setTodos(todos.filter((value) => value.id !== todoID));

  const handleCancelUpdate = () => setEditableTodoID(null);

  const handleGetEditableTodo = () =>
    todos.filter((todo) => todo.id === editableTodoID)[0];

  const handleSetEditableTodo = (todoId) => setEditableTodoID(todoId);

  return (
    <div className="App">
      <TodoBoard
        todos={todos}
        deleteTodoHandler={handleDeleteTodo}
        setEditableTodoHandler={handleSetEditableTodo}
        isEdit={editableTodoID !== null}
      />
      <TodoForm
        users={users}
        createTodoHandler={handleCreateTodo}
        updateTodoHandler={handleUpdateTodo}
        editableTodo={handleGetEditableTodo()}
        cancelUpdateHandler={handleCancelUpdate}
      />
    </div>
  );
};

export default App;
