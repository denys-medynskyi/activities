import React, { PropTypes } from 'react'
//TODO: replace with https://github.com/callemall/material-ui
const TextInput = ({ id, name, placeholder }) => (
    <div className="row">
        <div className="input-field col s12">
            <input placeholder={placeholder || name} id={id} type="text" className="validate"/>
            <label htmlFor={name}>{name}</label>
        </div>
    </div>
)

TextInput.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string
}

export default TextInput