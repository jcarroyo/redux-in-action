import uuid from 'uuid';

export function uniqueId(){
    return uuid.v4();
}

export function createTask({title, description}){
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