/*
    action types
 */

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ACTIVITY_FORM_CHANGED = 'ACTIVITY_FORM_CHANGED'

/*
    action creators
 */

let nextId = 0

export const addActivityAction = (name, tag) => {
    return {
        type: ADD_ACTIVITY,
        id: nextId++,
        name: name,
        tag: tag
    };
}

export const activityFormChanged = (inputName, value) => {
    var form = {};
    form[inputName] = value;

    return {
        type: ACTIVITY_FORM_CHANGED,
        form: form
    }
}
