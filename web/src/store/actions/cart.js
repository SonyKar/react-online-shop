import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchCartStart = () => {
    return {
        type: actionTypes.FETCH_CART_START
    };
};

export const fetchCartSuccess = (cartItems) => {
    return {
        type: actionTypes.FETCH_CART_SUCCESS,
        cartItems: cartItems
    }
}

export const fetchCartFailed = (error) => {
    return {
        type: actionTypes.FETCH_CART_FAILED,
        error: error
    };
};

export const emptyCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    };
};

export const fetchCart = (login) => {
    return dispatch => {
        dispatch(fetchCartStart());
        axios.get('http://doublem.com/php/response/cart/getCartItems.php?login=' + login)
            .then(res => {
                const fetchedCartItems = [];
                for (let key in res.data) {
                    fetchedCartItems.push({
                        ...res.data[key],
                        id: key.slice(0, key.indexOf('_'))
                    });
                }
                dispatch(fetchCartSuccess(fetchedCartItems));
            })
            .catch(error => {
                dispatch(fetchCartFailed(error));
            });
    }
}

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