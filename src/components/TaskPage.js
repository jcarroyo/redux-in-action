import React, {Component} from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TaskPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNewCardFrom: false,
            title: '',
            description: ''
        };
    }

    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    resetForm = (e) => {
        this.setState({
            showNewCardFrom: false,
            title: '',
            description: ''
        })
    }

    onCreateTask = (e) => {
        e.preventDefault();
        this.props.onCreateTask({
          title: this.state.title,
          description: this.state.description  
        });
        this.resetForm();
    }

    toggleForm = () => {
        this.setState({
            showNewCardFrom: !this.state.showNewCardFrom
        })
    }

    renderTaskLists() {        
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {            
          const statusTasks = tasks ? tasks.filter(task => task.status === status) : [];
          return <TaskList 
            key={status} 
            status={status} 
            tasks={statusTasks}
            onTaskUpdate={this.props.onTaskUpdate} />
        });
      }

    renderIsLoading(){        
        return (
            <div className="tasks-loading" hidden={!this.props.isLoading}>
                Loading...
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderIsLoading()}            
                <div className='task-list'>
                    <div className='task-list-header'>
                        <button 
                            className='button button-default'
                            onClick={this.toggleForm}>
                            + New Task
                        </button>
                    </div>
                    {this.state.showNewCardFrom && (
                        <form className='task-list-form' onSubmit={this.onCreateTask}>
                            <input
                                className='full-width-input'
                                onChange={this.onTitleChange}
                                value={this.state.title}
                                type='text'
                                placeholder='title' />
                            <input
                                className='full-width-input'
                                onChange={this.onDescriptionChange}
                                value={this.state.description}
                                type='text'
                                placeholder='description' />
                            <button
                                className='button'
                                type='submit'>
                                Submit
                            </button>                            
                        </form>
                    )}
                    <div className='task-list'>
                        {this.renderTaskLists()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskPage;