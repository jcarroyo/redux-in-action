//The real point of reducers is to handle actions

const initialState = {
    isLoading: false,
    tasks: [],
    error: null
};

export default function tasks(state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(payload)
      }
    case 'UPDATE_TASK_SUCCEED':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.task.id) {
            return {
              ...task,
              status: payload.task.status
            }
          }
          return task;
        })
      }
    case 'FETCH_TASKS_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        tasks: payload.tasks
      }
    case 'CREATE_TASK_SUCCEEDED':
      return {
        ...state,
        tasks: state.tasks.concat(payload.task)
      }
  case 'FETCH_TASKS_STARTED':
      return {
        ...state,
        isLoading: true
      }
  case 'FETCH_TASKS_FAILED':
    return{
      ...state,
      isLoading: false,
      error: payload.error
    }
  }

  return state;
}