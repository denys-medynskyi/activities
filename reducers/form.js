import { ACTIVITY_FORM_CHANGED, ACTIVITY_FORM_FILLED_IN} from '../actions/index'
import { ADD_ACTIVITY, UPDATE_ACTIVITY } from '../actions/index'

const form = (state = {}, action) => {
    var input = {};
    input[action.inputName] = action.inputValue;
    switch (action.type) {
        case ACTIVITY_FORM_CHANGED:
            return Object.assign({}, state, input);
        case ACTIVITY_FORM_FILLED_IN:
            let activity = state.activities.find(activity => activity.id === action.id);
            return Object.assign({}, activity, input);
        case ADD_ACTIVITY:
            return {};
        case UPDATE_ACTIVITY:
            return {};
        default:
            return state;
    }
}

export default form