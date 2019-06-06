import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [
        {
            id: 1,
            name: "Black T-Shirt",
            price: 25.99,
            image: 't-shirt1.jpg',
            description: "Testing Description"
        },
        {
            id: 2,
            name: "White T-Shirt",
            price: 16.85,
            image: 't-shirt1.jpg',
            description: "Testing Description2"
        },
        {
            id: 3,
            name: "Red T-Shirt",
            price: 20.25,
            image: 't-shirt1.jpg',
            description: "Testing Description3"
        },
        {
            id: 4,
            name: "Blue T-Shirt",
            price: 40.56,
            image: 't-shirt1.jpg',
            description: "Testing Description4"
        },
        {
            id: 5,
            name: "Purple T-Shirt",
            price: 9.99,
            image: 't-shirt1.jpg',
            description: "Testing Description5"
        }
    ],
    product: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            return {...state}
        case actionTypes.ADD_PRODUCT:
            return {...state}
        case actionTypes.REMOVE_PRODUCT:
            return {...state}
        case actionTypes.SELECTED_PRODUCT:
            let selectedProduct = null;
            state.products.map( product => {
                if (product.id === action.id) {
                    selectedProduct = product;
                    return false;
                }
                return false;
            });
            return {
                ...state,
                product: selectedProduct
            }
        default: 
            return state; 
    }
};

export default reducer;