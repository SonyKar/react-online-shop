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