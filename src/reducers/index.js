//The real point of reducers is to handle actions


  
  export default function tasks(state = {tasks: []}, action){    
    const {payload} = action;
    
    switch(action.type){
      case 'CREATE_TASK':
        return {
          ...state,
          tasks: state.tasks.concat(action.payload)
        }
    case 'TASK_STATUS_CHANGE':      
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if(task.id === payload.id){
              return {
                ...task,
                status: payload.status
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
    }    
    return state;
}