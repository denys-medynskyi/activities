import React from 'react'
import { connect } from 'react-redux'
import { activityFormChanged } from '../actions/index'
import { addActivity } from '../actions/index'
import ActivityForm from '../components/ActivityForm'


const mapStateToProps = (state) => {
    return {
        nameValue: state.form.name,
        tagValue: state.form.tag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAction: (name, tag) => {
            dispatch(addActivity(name, tag));
        },
        onFormUpdate: (inputName, inputValue) => {
            dispatch(activityFormChanged(inputName, inputValue));
        }
    }
}

const AddActivity = (props) => {
    return <ActivityForm header="New activity" nameValue={props.nameValue} tagValue={props.tagValue} onSubmitAction={props.onSubmitAction} onFormUpdate={props.onFormUpdate}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity)

