import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import taskReducer from './reducers';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';

import logger from './middleware/logger';

const rootReducer = (state = {}, action) => {
    return {
        tasks: taskReducer(state.tasks, action)
    }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

//registerServiceWorker();
