//The real point of reducers is to handle actions
export default function tasks(state = { tasks: [] }, action) {
  const { payload } = action;

  switch (action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload)
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
        tasks: payload.tasks
      }
    case 'CREATE_TASK_SUCCEEDED':
      return {
        ...state,
        tasks: state.tasks.concat(action.payload.task)
      }
  }

  return state;
}