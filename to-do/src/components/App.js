import React, { useReducer } from "react";
import * as AppState from "./App.hooks";
import { Header } from "./Header";
import TodoForm from "./TodoForm";
import TodoBoard from "./TodoBoard";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "fontsource-roboto";

export const App = () => {
  const [state, dispatch] = useReducer(
    AppState.appStateReducer,
    AppState.InitialAppState
  );

  const handleCreateTodo = (todo) => {
    dispatch({ type: AppState.CREATE_TODO, payload: todo });
  };

  const handleUpdateTodo = (updatedTodo) => {
    dispatch({
      type: AppState.UPDATE_TODO,
      payload: updatedTodo,
    });
  };

  const handleDeleteTodo = (todoID) =>
    dispatch({ type: AppState.DELETE_TODO, payload: todoID });

  const handleCancelUpdate = () => dispatch({ type: AppState.CANCEL_EDIT });

  const handleGetEditableTodo = () =>
    state.todos.filter((todo) => todo.id === state.editableTodoID)[0];

  const handleSetEditableTodo = (todoId) =>
    dispatch({ type: AppState.SET_EDITABLE_TODO_ID, payload: todoId });

  return (
    <ThemeProvider>
      <Header />
      <Container maxWidth="sm">
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
      </Container>
    </ThemeProvider>
  );
};

export default App;
