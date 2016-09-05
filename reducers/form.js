import { ACTIVITY_FORM_CHANGED } from '../actions/index'
import { ADD_ACTIVITY } from '../actions/index'
import { UPDATE_ACTIVITY } from '../actions/index'

const form = (state = {}, action) => {
    var input = {};
    input[action.inputName] = action.inputValue;
    switch (action.type) {
        case ACTIVITY_FORM_CHANGED:
            return Object.assign({}, state, input);
        case ADD_ACTIVITY:
            return {};
        case UPDATE_ACTIVITY:
            return {};
        default:
            return state;
    }
}

export default form