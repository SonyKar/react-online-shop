import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    loading: false
}

const fetchCartStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchCartSuccess = (state, action) => {
    return {
        ...state,
        cart: action.cartItems,
        loading: false
    };
};

const fetchCartFailed = (state, action) => {
    return {
        loading: false
    };
};

const emptyCart = (state, action) => {
    return {
        ...state,
        cart: []
    };
};

const addToCartDBStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const addToCartDBFailed = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const addToCart = (state, action) => {
    let foundSimmilarElements = false;
    const oldProducts = state.cart.slice();
    let newProducts = oldProducts.map(product => {
        if (product.id === action.id && product.size === action.size) {
            foundSimmilarElements = true;
            return {
                ...product,
                qty: +product.qty + action.qty
            }
        }
        return product;
    });
    if (!foundSimmilarElements) {
        const updatedItem = {
            id: action.id,
            name: action.name,
            price: action.price,
            image: action.image,
            size: action.size,
            qty: action.qty
        };
        newProducts = [
            ...newProducts,
            updatedItem
        ]
    }
    return {
        ...state,
        cart: newProducts,
        loading: false
    };
};

const removeFromCart = (state, action) => {
    return {
        ...state,
        cart: state.cart.filter(item => item.id + item.size !== action.id + action.size)
    };
};

const updateCartDBStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const updateCartDBFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const updateCart = (state, action) => {
    const oldProducts = state.cart.slice();
    let newProducts = oldProducts.map(item => {
        if (item.id === action.id && item.size === action.size) {
            return {
                ...item,
                qty: +action.qty
            }
        }
        return item;
    })
    return {
        ...state,
        cart: newProducts,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_START:
            return fetchCartStart(state, action);
        case actionTypes.FETCH_CART_SUCCESS:
            return fetchCartSuccess(state, action);
        case actionTypes.FETCH_CART_FAILED:
            return fetchCartFailed(state, action);
        case actionTypes.EMPTY_CART:
            return emptyCart(state, action);
        case actionTypes.ADD_TO_CART_DB_START:
            return addToCartDBStart(state, action);
        case actionTypes.ADD_TO_CART_DB_FAILED:
            return addToCartDBFailed(state, action);
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case actionTypes.UPDATE_CART_DB_START:
            return updateCartDBStart(state, action);
        case actionTypes.UPDATE_CART_DB_FAILED:
            return updateCartDBFailed(state, action);
        case actionTypes.UPDATE_CART:
            return updateCart(state, action);
        default: 
            return state; 
    }
};

export default reducer;