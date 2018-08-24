import uuid from 'uuid';
import axios from 'axios';
import * as api from '../api';

export function uniqueId(){
    return uuid.v4();
}


export function createTask({title, description, status='Unstarted'}){
    return dispatch => {
        api.createTask({title, description, status}).then(resp => {
            dispatch(createTaskSucceed(resp.data));
        });
    }
}

//sync action creator
export function createTaskSucceed(task){
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task
        }
    }
}

function getTaskById(tasks, id){
    return tasks.find(task => task.id === id);
}

export function updateTask(id, params = {}){
    return (dispatch, getState) => {
        const task = getTaskById(getState().tasks.tasks, id);
        const updateTask = {
            ...task,
            ...params
        };
        api.updateTask(id, updateTask).then(resp => {
            dispatch(updateTaskSucceed(resp.data));
        });
    }
}

export function updateTaskSucceed(task){
    return {
        type: 'UPDATE_TASK_SUCCEED',
        payload: {
            task: task
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

export function fetchTasksStarted(){
    return {
        type: 'FETCH_TASKS_STARTED'
    }
}

export function fetchTasks(){    
    return dispatch => 
    {
        dispatch(fetchTasksStarted());
        
        api.fetchTasks().then(resp => {
            //setTimeout(() => {
                dispatch(fetchTasksSucceeded(resp.data));
            //}, 2000);
        }, err => {
            throw new Error("Oh noes! cannot render tasks");
        })
        .catch(err => {
            dispatch(fetchTasksFailed(err.message));
        })
    }
}

function fetchTasksFailed(error){
    return {
        type: 'FETCH_TASKS_FAILED',
        payload: {
            error
        }
    }
}