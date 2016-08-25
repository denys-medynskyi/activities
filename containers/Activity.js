import React from 'react'
import { connect } from 'react-redux'
import ActivityElement from '../components/ActivityElement'

import { deleteActivity } from '../actions/index'


const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteAction: (id) => {
            dispatch(deleteActivity(id))
        }
    }
}

const Activity = (props) => {
    return <ActivityElement onDeleteAction={props.onDeleteAction}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityElement)

