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

export const fetchCart = (login) => {
    return dispatch => {
        dispatch(fetchCartStart());
        axios.get('/response/cart/getCartItems.php?login=' + login)
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

export const addToCartDBStart = () => {
    return {
        type: actionTypes.ADD_TO_CART_DB_START
    };
};

export const addToCartDBFailed = (error) => {
    return {
        type: actionTypes.ADD_TO_CART_DB_FAILED,
        error: error
    };
};

export const addToCartDB = (id, name, price, size, qty, image, login) => {
    return dispatch => {
        dispatch(addToCartDBStart());
        axios.post("/response/cart/addCartItem.php?login=" + login, {
            id: id,
            size: size,
            qty: qty
        })
            .then(res => {
                if (res.data.error === undefined) dispatch(addToCart(id, name, price, size, +qty, image));
                else dispatch(addToCartDBFailed(res.data.error));
            })
            .catch(error => {
                dispatch(addToCartDBFailed(error));
            })
    };
};

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

export const removeFromCartDBStart = () => {
    return {
        type: actionTypes.REMOVE_FROM_CART_DB_START
    };
};

export const removeFromCartDBFailed = (error) => {
    return {
        type: actionTypes.REMOVE_FROM_CART_DB_FAILED,
        error: error
    };
};

export const removeFromCartDB = (id, size, login) => {
    return dispatch => {
        dispatch(removeFromCartDBStart());
        axios.post('/response/cart/deleteCartItem.php?login=' + login, {
            'id': id,
            'size': size
        })
            .then(res => {
                console.log(res.data);
                if (res.data.error === undefined) dispatch(removeFromCart(id, size));
                else dispatch(removeFromCartDBFailed(res.data.error));
            })
            .catch(error => {
                dispatch(removeFromCartDBFailed(error));
            });
    };
};

export const removeFromCart = (id, size) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id: id,
        size: size
    };
};

export const updateCartDBStart = () => {
    return {
        type: actionTypes.UPDATE_CART_DB_START
    };
};

export const updateCartDBFailed = (error) => {
    return {
        type: actionTypes.UPDATE_CART_DB_FAILED,
        error: error
    };
};

export const updateCartDB = (id, size, qty, login) => {
    return dispatch => {
        dispatch(updateCartDBStart());
        axios.put('/response/cart/updateCartItem.php?login=' + login, {
            'id': id,
            'size': size,
            'qty': qty
        })
            .then(res => {
                if (res.data.error === undefined) dispatch(updateCart(id, size, qty));
                else dispatch(updateCartDBFailed(res.data.error));
            })
            .catch(error => {                
                dispatch(updateCartDBFailed(error));
            })
    }
}

export const updateCart = (id, size, qty) => {
    return {
        type: actionTypes.UPDATE_CART,
        id: id,
        size: size,
        qty: qty
    };
};

export const emptyCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    };
};