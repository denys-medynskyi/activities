import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Activity from '../containers/Activity'

const ActivityList = ({activities}) => (
    <div>
        {activities.map(activity =>
            <Activity
                key={activity.id}
                {...activity}
            />
        )}
        <Link children="Add activity" to="new"/>
    </div>
)

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired
}

export default ActivityList;