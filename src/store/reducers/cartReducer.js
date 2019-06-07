import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [
        {
            id: 1,
            name: 'Black T-Shirt',
            price: 25.99,
            image: 't-shirt1.jpg',
            size: 'M',
            qty: 3
        },
        {
            id: 1,
            name: 'Black T-Shirt',
            price: 25.99,
            image: 't-shirt1.jpg',
            size: 'S',
            qty: 2
        }
    ]
}

const addToCart = (state, action) => {
    let foundSimmilarElements = false;
    const oldProducts = state.cart.slice();
    let newProducts = oldProducts.map(product => {
        if (product.id === action.id && product.size === action.size) {
            foundSimmilarElements = true;
            return {
                ...product,
                qty: product.qty + action.qty
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
        cart: newProducts
    }
}

const removeFromCart = (state, action) => {
    return {
        ...state,
        cart: state.cart.filter(item => {
            if (item.id !== action.id || item.size !== action.size) {
                return item;
            }
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return addToCart(state, action);
        case actionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action);
        default: 
            return state; 
    }
};

export default reducer;