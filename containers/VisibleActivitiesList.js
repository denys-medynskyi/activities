import React from 'react'
import { connect } from 'react-redux'
import ActivityList from '../components/ActivityList'


const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const VisibleActivitiesList = (props) => {
    return <ActivityList activities={props.activities}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleActivitiesList)