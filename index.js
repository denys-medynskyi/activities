import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import appReducer from './reducers'

let activities = [
    {
        'id': 1,
        'name': 'Walk in the park',
        'tag': 'Active'
    }
]

let store = createStore(appReducer, {activities: activities}, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)