import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ActivityElement = ({id, name, onDeleteAction}) => {

    const onDelete = (e) => {
        e.preventDefault();
        if(confirm("Are you sure you want to delete ?")) {
            onDeleteAction(id);
        }
    }

    const onEdit = (e) => {
        onFormUpdate(e.target.name, e.target.value);
    }

    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-content">
                        <a href>
                            <i className="material-icons right" onClick={onDelete}>delete</i>
                        </a>
                        <Link to={`/activities/${id}`}>
                            <i className="material-icons right">edit</i>
                        </Link>
                        <span className="card-title">{name}</span>
                        <p>{id}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityElement;