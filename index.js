import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { IndexRoute, Redirect, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './components/App'
import NewActivity from './containers/NewActivity'
import VisibleActivitiesList from './containers/VisibleActivitiesList'
import appReducer from './reducers'

const LOCAL_STORAGE_KEY = 'reduxState'
const persisitedState = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {};

let store = createStore(appReducer, persisitedState, window.devToolsExtension && window.devToolsExtension());
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={VisibleActivitiesList} />
                <Route path="new" component={NewActivity}/>
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)