import React, { useReducer } from "react";
import { todoData, userData } from "../sampleData.js";
import TodoForm from "./TodoForm.js";
import TodoBoard from "./TodoBoard.js";

export const App = () => {
  const initialState = {
    todos: todoData,
    users: userData,
    editableTodoID: null,
  };

  const actionTypes = {
    setTodos: "setTodos",
    setEditableTodoID: "setEditableTodoID",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.setTodos:
        return { ...state, todos: action.payload };
      case actionTypes.setEditableTodoID:
        return { ...state, editableTodoID: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCreateTodo = (todo) => {
    dispatch({ type: actionTypes.setTodos, payload: [todo, ...state.todos] });
    dispatch({ type: actionTypes.setEditableTodoID, payload: null });
  };

  const handleUpdateTodo = (updatedTodo) => {
    dispatch({
      type: actionTypes.setTodos,
      payload: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    });
    dispatch({ type: actionTypes.setEditableTodoID, payload: null });
  };

  const handleDeleteTodo = (todoID) =>
    dispatch({
      type: "setTodos",
      payload: state.todos.filter((value) => value.id !== todoID),
    });

  const handleCancelUpdate = () =>
    dispatch({ type: actionTypes.setEditableTodoID, payload: null });

  const handleGetEditableTodo = () =>
    state.todos.filter((todo) => todo.id === state.editableTodoID)[0];

  const handleSetEditableTodo = (todoId) =>
    dispatch({ type: actionTypes.setEditableTodoID, payload: todoId });

  return (
    <div className="App">
      <TodoBoard
        todos={state.todos}
        deleteTodoHandler={handleDeleteTodo}
        setEditableTodoHandler={handleSetEditableTodo}
        isEdit={state.editableTodoID !== null}
      />
      <TodoForm
        users={state.users}
        createTodoHandler={handleCreateTodo}
        updateTodoHandler={handleUpdateTodo}
        editableTodo={handleGetEditableTodo()}
        cancelUpdateHandler={handleCancelUpdate}
      />
    </div>
  );
};

export default App;
