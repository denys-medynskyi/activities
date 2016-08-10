import React, { PropTypes } from 'react'
import TextInput from '../components/Form/TextInput'
import PageHeader from '../components/PageHeader'


const ActivityForm = ({header, onClick}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onClick();
    }

    return (
        <div className="row">
            <form className="col s6" onSubmit={onClick}>
                <PageHeader text={header}></PageHeader>
                <TextInput id="name" placeholder="Enter name" name="name"></TextInput>
                <TextInput id="tag" placeholder="Enter tag" name="tag"></TextInput>
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
    onClick: PropTypes.func.isRequired
}

export default ActivityForm