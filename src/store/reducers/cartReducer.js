import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let foundSimmilarElements = false;
            const oldProducts = state.products.slice();
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
                products: newProducts
            }
        default: 
            return state; 
    }
};

export default reducer;