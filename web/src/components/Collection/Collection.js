import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import './Collection.css';
import * as actions from '../../store/actions/index';

const Collection = (props) => (
    <div className="col-xl-4 col-6 mt-2">
        <div className="Collection" style={{
            backgroundImage: `url(${props.image})`
        }}>
            {props.role === 'admin' ? (
                <div className="adminControls">
                    <button className="btn btn-transparent-light" onClick={() => props.edit(props.name, props.collectionId)}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn btn-transparent-light" onClick={() => props.onRemoveCollection(props.collectionId)}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            ) : null}
            <h2>{props.name}</h2>
            <NavLink to={{
                pathname: '/collections/' + props.collectionId,
                state: {
                    collectionName: props.name
                }
            }} className="btn btn-light">VIEW PRODUCTS</NavLink>
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        role: state.auth.person.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCollection: (id) => dispatch(actions.removeCollection(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);