import React, { PropTypes } from 'react'
//TODO: replace with https://github.com/callemall/material-ui
const TextInput = ({ id, name, placeholder, onChange, value }) => (
    <div className="row">
        <div className="input-field col s12">
            <input
                id={id} type="text"
                className="validate"
                onChange={onChange}
                name={name}
                defaultValue={value}
                required='required'
            />
            <label htmlFor={name}>{name}</label>
        </div>
    </div>
)

TextInput.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string
}

export default TextInput