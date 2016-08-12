import { ADD_ACTIVITY } from '../actions/index'

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
        default:
            return state;
    }
}

export default activities