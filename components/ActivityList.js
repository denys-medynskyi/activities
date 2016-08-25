import React, { PropTypes } from 'react'
import Activity from '../containers/Activity'

const ActivityList = ({activities}) => (
    <div>
        {activities.map(activity =>
            <Activity
                key={activity.id}
                {...activity}
            />
        )}
    </div>
)

ActivityList.propTypes = {
    activities: PropTypes.array.isRequired
}

export default ActivityList;