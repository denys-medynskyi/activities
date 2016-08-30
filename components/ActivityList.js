import React, { PropTypes } from 'react'
import Activity from '../containers/Activity'
import { Link } from 'react-router'

const ActivityList = ({activities}) => (
    <div>
        {
            activities.map(activity =>
                <Activity
                    key={activity.id}
                    {...activity}
                />
            )
        }
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Push the red button to create activity, you lazy ass !</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col s12 m7 right-align">
                <Link to="new" className="btn-floating btn-large waves-effect waves-light red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    </div>
)

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired
}

export default ActivityList;