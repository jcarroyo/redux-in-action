import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'

import TaskPage from './components/TaskPage';
import {createTask, taskStatusChange} from './actions';

class App extends Component {

  onCreateTask = ({title, description}) => {
    this.props.dispatch(createTask({title, description}));
  }

  onTaskStatusChange = ({id, status}) => {    
   this.props.dispatch(taskStatusChange({id, status}));     
  }

  render() {
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TaskPage 
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onTaskStatusChange} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
