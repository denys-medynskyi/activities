import { ADD_ACTIVITY } from '../actions/index'
import { DELETE_ACTIVITY } from '../actions/index'

const activity = (state = {}, action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            return {
                id: action.id,
                name: action.name,
                tag: action.tag
            }
        default:
            return state
    }
}

const activities = (state = [], action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            return [
                ...state,
                activity(undefined, action)
            ]
        case DELETE_ACTIVITY:
            return state.filter((item) => item.id != action.id );
        default:
            return state;
    }
}

export default activities