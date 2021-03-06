export enum ActionTypes {
  DidInvalidate = "todos/didInvalidate",
  SetTodos = "todos/setTodos",
  DeleteTodo = "todos/delete",
  ToggleCompleted = "todos/toggleCompleted",
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface SetTodosAction {
  type: ActionTypes.SetTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.DeleteTodo;
  payload: number;
}

export interface ToggleCompletedAction {
  type: ActionTypes.ToggleCompleted;
  payload: number;
}

export interface InvalidateAction {
  type: ActionTypes.DidInvalidate;
}

export type Action =
  | SetTodosAction
  | DeleteTodoAction
  | InvalidateAction
  | ToggleCompletedAction;
