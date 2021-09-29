import { createSelector } from 'reselect'


export const loading = (state) => state.todos.isLoading
export const getTodos = (state) => state.todos.data
export const selectCompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => todo.isCompleted)
)
export const selectInCompletedTodos = createSelector(
  [getTodos],
  (todos) => todos.filter((todo) => !todo.isCompleted)
)

