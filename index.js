import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App'
import appReducer from './reducers'

const LOCAL_STORAGE_KEY = 'reduxState'
const persisitedState = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : {};

let store = createStore(appReducer, persisitedState, window.devToolsExtension && window.devToolsExtension());
store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

const Foo = React.createClass({
    render() {
        return <h3>Foo</h3>
    }
})

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="foo" component={Foo}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)