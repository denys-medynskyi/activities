import { combineReducers } from 'redux'
import activities from './activities'
import form from './form'

const appReducer = combineReducers({
    activities,
    form
})

export default appReducer