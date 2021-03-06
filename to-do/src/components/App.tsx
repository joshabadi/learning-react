import React, { useReducer } from "react";
import * as AppState from "../hooks/App.hooks";
import { ITodo } from "../types/todo.types";
import { ThemeProvider } from "@material-ui/core/styles";
import * as GlobalElements from "../styles/App.Styled";
import { Header } from "./Header";
import TodoForm from "./TodoForm";
import TodoBoard from "./TodoBoard";
import "fontsource-roboto";

export const App = () => {
  const [state, dispatch] = useReducer(
    AppState.appStateReducer,
    AppState.InitialAppState
  );

  const handleCreateTodo = (todo: ITodo) => {
    dispatch({ type: AppState.CREATE_TODO, payload: todo });
  };

  const handleUpdateTodo = (updatedTodo: ITodo) => {
    dispatch({
      type: AppState.UPDATE_TODO,
      payload: updatedTodo,
    });
  };

  const handleDeleteTodo = (todoID: number | null) =>
    dispatch({ type: AppState.DELETE_TODO, payload: todoID });

  const handleCancelUpdate = () => dispatch({ type: AppState.CANCEL_EDIT });

  const handleGetEditableTodo = () =>
    state.todos.filter((todo) => todo.id === state.editableTodoID)[0];

  const handleSetEditableTodo = (todoId: number | null) =>
    dispatch({ type: AppState.SET_EDITABLE_TODO_ID, payload: todoId });

  const handleToggleForm = () => {
    dispatch({
      type: AppState.TOGGLE_TODO_FORM,
      payload: !state.todoFormIsVisible,
    });
  };

  return (
    <ThemeProvider theme={GlobalElements.MasterTheme}>
      <Header
        toggleFormHandler={handleToggleForm}
        isTodoFormVisible={state.todoFormIsVisible}
      />
      <GlobalElements.ContainerStyled maxWidth="sm">
        <GlobalElements.App>
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
        </GlobalElements.App>
      </GlobalElements.ContainerStyled>
    </ThemeProvider>
  );
};

export default App;
