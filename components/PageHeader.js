import React, { PropTypes } from 'react'

const PageHeader = ({text}) => (
    <div className="row">
        <div className="col s12">
            <h4>{text}</h4>
        </div>
    </div>
)

PageHeader.propTypes = {
    text: PropTypes.string.isRequired
}

export default PageHeader