import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [
        {
            id: 1,
            name: "Black T-Shirt",
            price: 25.99,
            Description: "Testing Description"
        },
        {
            id: 2,
            name: "White T-Shirt",
            price: 16.85,
            Description: "Testing Description2"
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        default: 
            return state; 
    }
};

export default reducer;