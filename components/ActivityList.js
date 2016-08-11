import React, { PropTypes } from 'react'
import Activity from './Activity'

const ActivityList = ({activities}) => (
    <ul>
        {activities.map(activity =>
            <Activity
                key={activity.id}
                {...activity}
            />
        )}
    </ul>
)

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired
}

export default ActivityList;