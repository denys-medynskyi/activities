import React from 'react'
import { connect } from 'react-redux'
import { activityFormChanged } from '../actions/index'
import ActivityForm from '../components/ActivityForm'


const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            console.log('click');
        }
    }
}

const AddActivity = (props) => {
    return <ActivityForm header="New activity" onClick={props.onClick}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity)

