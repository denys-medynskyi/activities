/*
    action types
 */

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ACTIVITY_FORM_CHANGED = 'ACTIVITY_FORM_CHANGED'

/*
    action creators
 */

let nextId = 0

export const addActivity = () => {
    return {
        type: ADD_ACTIVITY,
        id: nextId++
    };
}

export const activityFormChanged = (inputName, inputValue) => {
    return {
        type: ACTIVITY_FORM_CHANGED,
        inputName,
        inputValue
    }
}
