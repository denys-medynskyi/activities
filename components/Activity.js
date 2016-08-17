import React, { PropTypes } from 'react'

const Activity = ({name}) => (
    <div className="row">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-content">
                    <i className="material-icons right">delete</i>
                    <i className="material-icons right">edit</i>
                    <span className="card-title">{name}</span>
                    <p>Some info about activity</p>
                </div>
            </div>
        </div>
    </div>
)

export default Activity;