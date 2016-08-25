import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'

import App from './components/App'
import appReducer from './reducers'

const LOCAL_STORAGE_KEY = 'reduxState'
const persisitedState = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {};

let store = createStore(appReducer, persisitedState, window.devToolsExtension && window.devToolsExtension());
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)