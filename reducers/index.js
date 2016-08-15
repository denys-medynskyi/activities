import { combineReducers } from 'redux'
import activities from './activities'
import form from './form'
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
    activities,
    form,
    routing: routerReducer
})

export default appReducer