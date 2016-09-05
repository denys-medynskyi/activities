import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import { activityFormChanged } from '../actions/index'
import { updateActivity } from '../actions/index'
import ActivityForm from '../components/ActivityForm'

let activityId = '32c0fbc3-9ae3-4d27-87ec-dcd24b28634b';

const mapStateToProps = (state) => {
    return {
        nameValue: state.form.name,
        tagValue: state.form.tag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAction: (name, tag) => {
            dispatch(updateActivity(activityId, name, tag));
            dispatch(push('/'));
        },
        onFormUpdate: (inputName, inputValue) => {
            dispatch(activityFormChanged(inputName, inputValue));
        }
    }
}

const EditActivity = (props) => {
    return (
        <div>
            <ActivityForm header="Edit activity" nameValue={props.nameValue} tagValue={props.tagValue} onSubmitAction={props.onSubmitAction} onFormUpdate={props.onFormUpdate}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity)