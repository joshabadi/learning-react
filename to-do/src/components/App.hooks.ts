import { todoData, userData } from "../sampleData.js";
import { ITodo } from "../types/todo.types";
import { IUser } from "../types/user.types";

interface IAppState {
  todos: Array<ITodo>; // can also write ITodo[], https://www.typescriptlang.org/docs/handbook/basic-types.html#array
  users: Array<IUser>;
  editableTodoID: number | null;
  todoFormIsVisible: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

export const InitialAppState: IAppState = {
  todos: todoData,
  users: userData,
  editableTodoID: null,
  todoFormIsVisible: true,
};

export const CREATE_TODO = "CREATE_TODO";
export const SET_EDITABLE_TODO_ID = "SET_EDITABLE_TODO_ID";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO_FORM = "TOGGLE_TODO_FORM";

export const appStateReducer = (
  state: IAppState,
  action: IAction
): IAppState => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        editableTodoID: null,
        todoFormIsVisible: false,
      };
    case SET_EDITABLE_TODO_ID:
      return {
        ...state,
        editableTodoID: action.payload,
        todoFormIsVisible: true,
      };
    case CANCEL_EDIT:
      return { ...state, editableTodoID: null, todoFormIsVisible: false };
    case UPDATE_TODO: {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return {
        ...state,
        todos: [...updatedTodos],
        editableTodoID: null,
        todoFormIsVisible: false,
      };
    }
    case DELETE_TODO: {
      const updatedTodos = state.todos.filter(
        (value) => value.id !== action.payload
      );

      return { ...state, todos: [...updatedTodos], todoFormIsVisible: false };
    }
    case TOGGLE_TODO_FORM: {
      return {
        ...state,
        todoFormIsVisible: action.payload,
        editableTodoID: null,
      };
    }

    default:
      throw new Error();
  }
};
