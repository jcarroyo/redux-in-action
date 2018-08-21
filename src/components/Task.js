import React from 'react';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const Task = (props) => {

    function onStatusChange(e){                        
        props.onStatusChange({id: props.task.id, status: e.target.value});
    }

    const statusOptions = TASK_STATUSES.map(task => (
        <option value={task} key={task}>
            {task}
        </option>
    ))
    return(
        <div className='task'>
            <div className='task-header'>
                <div>{props.task.title}</div>
                <select onChange={onStatusChange} value={props.task.status}>
                    {statusOptions} 
                </select>
            </div>
            <hr />
            <div className='task-body'>{props.task.description}</div>
        </div>
    );
}

export default Task;