import React from 'react'
import PageHeader from './PageHeader'
import AddActivity from '../containers/AddActivity'
import VisibleActivitiesList from '../containers/VisibleActivitiesList'
import { Link } from 'react-router'


const App = ({children}) => {
    return (
        <div>
            <VisibleActivitiesList/>
        </div>
    )
}

export default App