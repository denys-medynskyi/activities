import React from 'react'
import PageHeader from './PageHeader'
import AddActivity from '../containers/AddActivity'
import VisibleActivitiesList from '../containers/VisibleActivitiesList'
import { Link } from 'react-router'


const App = ({children}) => {
    return (
        <div>
            <AddActivity/>
            <VisibleActivitiesList/>
        </div>
    )
    // <Link to="/foo">Foo</Link>
    // <div style={{ marginTop: '1.5em' }}>{children}</div>
}

export default App