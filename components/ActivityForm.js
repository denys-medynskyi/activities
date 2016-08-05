import React, {PropTypes} from 'react'
import TextInput from '../components/Form/TextInput'
import PageHeader from '../components/PageHeader'

const ActivityForm = ({header, name, tag}) (
    // <div className="row">
    //     <form className="col s6" onSubmit={onSubmit}>
    //         <PageHeader text={header}></PageHeader>
    //         <TextInput id="name" placeholder="Enter name" name="name" onChange={onInputChange}></TextInput>
    //         <TextInput id="tag" placeholder="Enter tag" name="tag" onChange={onInputChange}></TextInput>
    //         <div className="row">
    //             <div className="col s12">
    //                 <button className="btn waves-effect waves-light" type="submit" name="action">Submit
    //                     <i className="material-icons right">send</i>
    //                 </button>
    //             </div>
    //         </div>
    //     </form>
    // </div>
    <div className="row">
        <form className="col s6">
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

TextInput.propTypes = {
    // onInputChange: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    header: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string
}

export default TextInput