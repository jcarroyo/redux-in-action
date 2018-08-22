import uuid from 'uuid';
import axios from 'axios';

export function uniqueId(){
    return uuid.v4();
}

//action creator
export function createTask({title, description}){
    //action
    return {
        type: 'CREATE_TASK',
        payload: {
            id: uuid.v4(),
            title,
            description,
            status: 'Unstarted'
        }
    }
}

export function taskStatusChange({id, status}){    
    return {
        type: 'TASK_STATUS_CHANGE',
        payload: {
            id,
            status
        }
    }
}

export function fetchTasksSucceeded(tasks){
    return {
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks
        }
    }
}

export function fetchTasks(){
    return dispatch => {
        axios.get('http://localhost:3001/tasks')
            .then(resp => {                
                dispatch(fetchTasksSucceeded(resp.data));
            }
        )
    }
}