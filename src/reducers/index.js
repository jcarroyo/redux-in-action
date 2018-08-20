import {uniqueId} from '../actions';
import { debug } from 'util';

//The real point of reducers is to handle actions

const mockTasks = [
    {
      id: uniqueId(),
      title: 'Learn Redux',
      description: 'The store, actions, and reducers, oh my!',
      status: 'In Progress'
    },
    {
      id: uniqueId(),
      title: 'Peace on Earth',
      description: 'No big deal.',
      status: 'In Progress'
    }
  ]
  
  export default function tasks(state = {tasks: mockTasks}, action){
    debugger;
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
    }
    return state;
}