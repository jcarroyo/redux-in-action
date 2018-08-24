import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

import TaskPage from './components/TaskPage';
import FlashMessage from './components/FlashMessage';

import {createTask, taskStatusChange, fetchTasks, updateTask} from './actions';

class App extends Component {

  componentDidMount(){    
    this.props.dispatch(fetchTasks());
  }

  onCreateTask = ({title, description}) => {
    this.props.dispatch(createTask({title, description}));
  }

  onTaskUpdate = (id, params) => {   
   this.props.dispatch(updateTask(id, params));     
  }

  render() {
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.error && <FlashMessage message={this.props.error} />}
        <TaskPage 
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onTaskUpdate={this.onTaskUpdate}
          isLoading={this.props.isLoading} />
      </div>
    );
  }
}

function mapStateToProps(state){
  const {tasks, isLoading, error} = state.tasks;
  return {tasks, isLoading, error};
}

export default connect(mapStateToProps)(App);
