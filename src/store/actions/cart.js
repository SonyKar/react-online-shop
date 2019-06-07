import * as actionTypes from './actionTypes';

export const addToCart = (id, name, price, size, qty, image) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id,
        name: name,
        price: price,
        image: image,
        size: size,
        qty: qty
    };
};

export const removeFromCart = (id, size) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id: id,
        size: size
    }
}

export const updateCart = (id, size, qty) => {
    return {
        type: actionTypes.UPDATE_CART,
        id: id,
        size: size,
        qty: qty
    }
}