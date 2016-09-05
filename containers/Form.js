import React, { ReactDOM } from 'react'
import { dispatch } from 'react-redux'
import ActivityForm from '../components/ActivityForm'
import { activityFormChanged, updateActivity } from '../actions/index'

var Form = React.createClass({
    getInitialState: function() {
        return {
            nameValue: 'Read a book',
            tagValue: 'passive'
        };
    },

    onFormUpdate: (inputName, inputValue) => {
        dispatch(activityFormChanged(inputName, inputValue));
    },

    onSubmitAction: (id, name, tag) => {
        dispatch(updateActivity(id, name, tag));
        dispatch(push('/'));
    },

    render: function() {
        return <ActivityForm header="Edit activity" nameValue={this.state.nameValue} tagValue={this.state.tagValue} onSubmitAction={this.onSubmitAction} onFormUpdate={this.onFormUpdate}/>;
    }
});

export default Form;