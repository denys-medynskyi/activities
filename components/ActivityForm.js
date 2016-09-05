import React, { PropTypes } from 'react'
import TextInput from '../components/Form/TextInput'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router'

const ActivityForm = ({header, nameValue, tagValue, onSubmitAction, onFormUpdate}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitAction(nameValue, tagValue);
    }

    const updateForm = (e) => {
        onFormUpdate(e.target.name, e.target.value);
    }

    return (
        <div className="row">
            <form className="col s6" onSubmit={onSubmit}>
                <PageHeader text={header}></PageHeader>
                <TextInput id="name" value={nameValue} placeholder="Enter name" name="name" onChange={updateForm}></TextInput>
                <TextInput id="tag" value={tagValue} placeholder="Enter tag" name="tag" onChange={updateForm}></TextInput>
                <div className="row">
                    <div className="col s12">
                        <div className="col s6 text-left">
                            <Link children="Cancel" to="/"/>
                        </div>
                        <div className="col s4  offset-s2">
                            <button className="btn waves-effect waves-light full-width" type="submit" name="action">save
                                <i className="material-icons right">save</i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


ActivityForm.propTypes = {
    header: PropTypes.string.isRequired,
    onSubmitAction: PropTypes.func.isRequired,
    onFormUpdate: PropTypes.func.isRequired
}

export default ActivityForm