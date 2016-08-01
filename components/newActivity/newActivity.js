import React from 'react'
import TextInput from '../Form/TextInput'
import PageHeader from '../PageHeader'

const NewActivity = () => (
    <div className="row">
        <form className="col s6">
            <PageHeader text="Add new activity"></PageHeader>
            <TextInput id="name" name="Name"></TextInput>
            <TextInput id="tag" name="Tag"></TextInput>
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

export default NewActivity