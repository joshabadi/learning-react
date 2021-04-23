import React, { useReducer } from "react";
import * as AppState from "./App.hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import * as StyledElements from "../styles/App.Styled";
import { Header } from "./Header";
import TodoForm from "./TodoForm";
import TodoBoard from "./TodoBoard";
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

  const handleToggleForm = () => {
    dispatch({
      type: AppState.TOGGLE_TODO_FORM,
      payload: !state.todoFormIsVisible,
    });
  };

  return (
    <ThemeProvider theme={StyledElements.MasterTheme}>
      <Header
        toggleFormHandler={handleToggleForm}
        isVisible={state.todoFormIsVisible}
      />
      <Container maxWidth="sm">
        <div className="App">
          <TodoBoard
            todos={state.todos}
            deleteTodoHandler={handleDeleteTodo}
            setEditableTodoHandler={handleSetEditableTodo}
            isEdit={state.editableTodoID !== null}
          />
          {state.todoFormIsVisible ? (
            <TodoForm
              users={state.users}
              createTodoHandler={handleCreateTodo}
              updateTodoHandler={handleUpdateTodo}
              editableTodo={handleGetEditableTodo()}
              cancelUpdateHandler={handleCancelUpdate}
            />
          ) : null}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
