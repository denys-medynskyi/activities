import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push } from 'react-router-redux'
import { activityFormChanged } from '../actions/index'
import { updateActivity } from '../actions/index'
import { loadActivity } from '../actions/index'
import ActivityForm from '../components/ActivityForm'

const mapStateToProps = (state) => {
    return {
        nameValue: state.form.name,
        tagValue: state.form.tag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fillForm: (id) => {
          dispatch(loadActivity(id));
        },
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
            <ActivityForm header="Edit activity" fillForm={props.fillForm} nameValue={props.nameValue} tagValue={props.tagValue} onSubmitAction={props.onSubmitAction} onFormUpdate={props.onFormUpdate}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity)