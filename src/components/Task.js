import React from 'react';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const Task = (props) => {

    function onStatusChange(e){
        debugger;
        props.onStatusChange(props.task.id, e.target.value);
    }

    const statusOptions = TASK_STATUSES.map(task => (
        <option value={task} selected={props.task.status === task}>
            {task}
        </option>
    ))
    return(
        <div className='task'>
            <div className='task-header'>
                <div>{props.task.title}</div>
                <select onChange={onStatusChange}>
                    {statusOptions} 
                </select>
            </div>
            <hr />
            <div className='task-body'>{props.task.description}</div>
        </div>
    );
}

export default Task;