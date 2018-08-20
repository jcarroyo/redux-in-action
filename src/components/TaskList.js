import React from 'react';
import Task from './Task';

const TaskList = (props) => {    
    const tasks = props.tasks.map(task => (        
        <Task 
            key={task.id} 
            task={task}
            onStatusChange={props.onStatusChange} />        
    ));
    return(
        <div className='task-list'>
            <div className='task-list-title'>
                <strong>{props.status}</strong>
            </div>
            {tasks}
        </div>
    )
}

export default TaskList;