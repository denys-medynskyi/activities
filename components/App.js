import React from 'react'
import PageHeader from './PageHeader'
import AddActivity from '../containers/AddActivity'
import VisibleActivitiesList from '../containers/VisibleActivitiesList'

const App = () => {
    // return (
    //     <div>
    //         <AddActivity/>
    //     </div>
    // )

    return (
        <div>
            <VisibleActivitiesList/>
        </div>
    )
}

export default App