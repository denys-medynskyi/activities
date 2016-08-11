import { ACTIVITY_FORM_CHANGED } from '../actions/index'

const form = (state = {}, action) => {
    var input = {};
    input[action.inputName] = action.inputValue;
    switch (action.type) {
        case ACTIVITY_FORM_CHANGED:
            return Object.assign({}, state, input);
        default:
            return state;
    }
}

export default form