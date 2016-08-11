import React, { PropTypes } from 'react'
import TextInput from '../components/Form/TextInput'
import PageHeader from '../components/PageHeader'


const ActivityForm = ({header, nameValue, tagValue, onSubmitAction, onFormUpdate}) => {
    console.log(nameValue)
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitAction();
    }

    const updateForm = (e) => {
        onFormUpdate(e.target.name, e.target.value);
    }

    return (
        <div className="row">
            <form className="col s6" onSubmit={onSubmit}>
                <PageHeader text={header}></PageHeader>
                <TextInput id="name" defaultValue={nameValue} placeholder="Enter name" name="name" onChange={updateForm}></TextInput>
                <TextInput id="tag" defaultValue={tagValue} placeholder="Enter tag" name="tag" onChange={updateForm}></TextInput>
                <div className="row">
                    <div className="col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
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