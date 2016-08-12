import React, { PropTypes } from 'react'

const Activity = ({name}) => (
    <div className="row">
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src="images/sample-1.jpg"/>
                        <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>Some info about activity</p>
                </div>
            </div>
        </div>
    </div>
)

export default Activity;