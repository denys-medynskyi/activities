import React from 'react'
import PageHeader from './PageHeader'
import VisibleActivitiesList from '../containers/VisibleActivitiesList'
import { Link } from 'react-router'

// <div className="row">
//     <div class="col s12">
//     <nav>
//     <div class="nav-wrapper">
//     <div class="col s12">
//     <a href="#!" class="breadcrumb">First</a>
//     <a href="#!" class="breadcrumb">Second</a>
//     <a href="#!" class="breadcrumb">Third</a>
//     </div>
//     </div>
//     </nav>
//     </div>
//     </div>
const App = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default App