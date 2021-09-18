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