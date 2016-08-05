import { connect } from 'react-redux'
import { activityFormChanged } from '../actions/index'

const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit')
}


const mapStateToProps = (state) => {
    return {
        header: state.form.header,
        name: state.form.data.name,
        tag: state.form.data.tag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        activityFormChanged: dispatch(activityFormChanged)
    }
}


export default AddActivity
