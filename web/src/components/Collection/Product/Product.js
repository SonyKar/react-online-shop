import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
import * as actions from '../../../store/actions/index';

const Product = (props) => (
    <div>
        <div className="productImage">
            {props.role === 'admin' ? (
                <div className="adminControls">
                    <button className="btn btn-transparent-light" onClick={() => props.edit(props.name, props.price, props.desc, props.id)}><FontAwesomeIcon icon={faEdit} /></button>
                    <button className="btn btn-transparent-light" onClick={() => props.onRemoveProduct(props.id)}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            ) : null}
            <NavLink to={window.location.pathname + '/' + props.id} onClick={props.clicked}>
                <img src={props.image} alt="" className="w-100" />
            </NavLink>
        </div>
        <h5 className="text-center m-0">
            <NavLink to={window.location.pathname + '/' + props.id} onClick={props.clicked}>
                {props.name}
            </NavLink>
        </h5>
        <p>{props.price} $</p>
    </div>
);

const mapStateToProps = state => {
    return {
        role: state.auth.person.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveProduct: (id) => dispatch(actions.removeProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);