/*
    action types
 */

export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ACTIVITY_FORM_CHANGED = 'ACTIVITY_FORM_CHANGED'

/*
    action creators
 */

import { v4 } from 'node-uuid'

export const addActivity = (name, tag) => {
    return {
        type: ADD_ACTIVITY,
        id: v4(),
        name,
        tag
    };
}

export const activityFormChanged = (inputName, inputValue) => {
    return {
        type: ACTIVITY_FORM_CHANGED,
        inputName,
        inputValue
    }
}
