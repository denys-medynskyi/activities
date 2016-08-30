import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import { IndexRoute, Redirect, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import App from './components/App'
import NewActivity from './containers/NewActivity'
import VisibleActivitiesList from './containers/VisibleActivitiesList'
import appReducer from './reducers'

const LOCAL_STORAGE_KEY = 'reduxState'
const initialState = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {};

const store = createStore(appReducer, initialState, applyMiddleware(routerMiddleware(browserHistory)));

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