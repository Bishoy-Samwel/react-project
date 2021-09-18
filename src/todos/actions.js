export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const CHECK_STATUS = 'CHECK_STATUS';
export const checkStatus = id => ({
  type: CHECK_STATUS,
  payload: { id },
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSucess = () => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { TODOS },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailue = () => ({
  type: LOAD_TODOS_FAILURE,
});