import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    loading: false,
    price: 0
}

const fetchCartStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchCartSuccess = (state, action) => {
    let price = 0;
    action.cartItems.forEach(item => {
        price += item.price * item.qty;
    });
    return {
        ...state,
        cart: action.cartItems,
        loading: false,
        price: price
    };
};

const fetchCartFailed = (state, action) => {
    return {
        loading: false
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
    let price = state.price;
    const oldProducts = state.cart.slice();
    let newProducts = oldProducts.map(product => {
        if (product.id === action.id && product.size === action.size) {
            foundSimmilarElements = true;
            price += action.qty * product.price;
            return {
                ...product,
                qty: +product.qty + action.qty
            }
        }
        return product;
    });
    if (!foundSimmilarElements) {
        price += action.qty * action.price;
        const updatedItem = {
            id: action.id,
            name: action.name,
            price: action.price,
            image: action.image,
            size: action.size,
            qty: action.qty,
            collectionId: action.collectionId
        };
        newProducts = [
            ...newProducts,
            updatedItem
        ]
    }
    return {
        ...state,
        cart: newProducts,
        loading: false,
        price: price
    };
};

const removeFromCartDBStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const removeFromCartDBFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const removeFromCart = (state, action) => {
    let price = state.price;
    const newCartItems = state.cart.filter(item => {
        if (item.id + item.size === action.id + action.size) {
            price -= item.qty * item.price;
            return false;
        }
        return true;
    });
    return {
        ...state,
        cart: newCartItems,
        loading: false,
        price: price
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
    let price = state.price;
    let newProducts = oldProducts.map(item => {
        if (item.id === action.id && item.size === action.size) {
            const qty = action.qty - item.qty;
            if (qty > 0) {
                price += item.price * qty;
            } else {
                price -= item.price * -qty;
            }
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
        loading: false,
        price: price
    };
};

const emptyCart = (state, action) => {
    return {
        ...state,
        cart: [],
        price: 0
    };
};

const mergeAndFetchStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const mergeAndFetchSuccess = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const mergeAndFetchFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_START:
            return fetchCartStart(state, action);
        case actionTypes.FETCH_CART_SUCCESS:
            return fetchCartSuccess(state, action);
        case actionTypes.FETCH_CART_FAILED:
            return fetchCartFailed(state, action);
        case actionTypes.ADD_TO_CART_DB_START:
            return addToCartDBStart(state, action);
        case actionTypes.ADD_TO_CART_DB_FAILED:
            return addToCartDBFailed(state, action);
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART_DB_START:
            return removeFromCartDBStart(state, action);
        case actionTypes.REMOVE_FROM_CART_DB_FAILED:
            return removeFromCartDBFailed(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        case actionTypes.UPDATE_CART_DB_START:
            return updateCartDBStart(state, action);
        case actionTypes.UPDATE_CART_DB_FAILED:
            return updateCartDBFailed(state, action);
        case actionTypes.UPDATE_CART:
            return updateCart(state, action);
        case actionTypes.EMPTY_CART:
            return emptyCart(state, action);
        case actionTypes.MERGE_CART_AND_FETCH_START:
            return mergeAndFetchStart(state, action);
        case actionTypes.MERGE_CART_AND_FETCH_SUCCESS:
            return mergeAndFetchSuccess(state, action);
        case actionTypes.MERGE_CART_AND_FETCH_FAILED:
            return mergeAndFetchFailed(state, action);
        default: 
            return state; 
    }
};

export default reducer;