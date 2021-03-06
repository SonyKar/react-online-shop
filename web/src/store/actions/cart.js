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

export const addToCartDB = (id, name, price, size, qty, image, collectionId, login) => {
    return dispatch => {
        dispatch(addToCartDBStart());
        axios.post("/response/cart/addCartItem.php?login=" + login, {
            id: id,
            size: size,
            qty: qty
        })
            .then(res => {
                if (res.data.error === undefined) dispatch(addToCart(id, name, price, size, +qty, image, collectionId));
                else dispatch(addToCartDBFailed(res.data.error));
            })
            .catch(error => {
                dispatch(addToCartDBFailed(error));
            })
    };
};

export const addToCart = (id, name, price, size, qty, image, collectionId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        id: id,
        name: name,
        price: price,
        image: image,
        size: size,
        qty: qty,
        collectionId: collectionId
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

export const mergeCartAndFetchStart = () => {
    return {
        type: actionTypes.MERGE_CART_AND_FETCH_START
    };
};

export const mergeCartAndFetchSuccess = () => {
    return {
        type: actionTypes.MERGE_CART_AND_FETCH_SUCCESS
    };
};

export const mergeCartAndFetchFailed = (error) => {
    return {
        type: actionTypes.MERGE_CART_AND_FETCH_FAILED,
        error: error
    };
};

export const mergeCartAndFetch = (products, login) => {
    return dispatch => {
        dispatch(mergeCartAndFetchStart());
        let length = products.length;
        products.forEach((item, index) => {
            let formData = new FormData();
            formData.append('id', item.id);
            formData.append('size', item.size);
            formData.append('qty', item.qty);

            axios.post('/response/cart/mergeCartItems.php?login=' + login, formData)
                .then(res => {
                    if (index === length - 1) {
                        if (res.data.error === undefined) {
                            dispatch(mergeCartAndFetchSuccess());
                            dispatch(emptyCart());
                            dispatch(fetchCart(login));
                        } else {
                            dispatch(mergeCartAndFetchFailed(res.data.error));
                        }
                    }
                })
                .catch(error => {
                    dispatch(mergeCartAndFetchFailed(error));
                });
        });
    };
};