import * as actionTypes from '../actions/actionTypes';

export const setProducts = () => {
    return {
        type: actionTypes.SET_PRODUCTS
    };
};

export const addProduct = () => {
    return {
        type: actionTypes.ADD_PRODUCT
    };
};

export const removeProduct = () => {
    return {
        type: actionTypes.REMOVE_PRODUCT
    };
};

export const selectedProduct = (id) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        id: id
    };
};