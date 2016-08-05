import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose, Provider, combineReducers } from 'redux';

import { todos } from './reducers/activities'

import App from './components/App'

const activitiesApp = combineReducers({
    todos
})


let store = createStore(activitiesApp);

console.log(store.getState());

render(
<Provider store={store}>
    <App></App>
</Provider>,
    document.getElementById('root')
)