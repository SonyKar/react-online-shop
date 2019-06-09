import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    product: null,
    loading: false,
    error: ''
}

const fetchProductsStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchProductsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        products: action.products
    };
};

const fetchProductsFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
};

const fetchProductStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const fetchProductSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        product: action.product
    };
};

const fetchProductFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
};

const selectedProduct = (state, action) => {
    let selectedProduct = null;
    state.products.slice().map( product => {
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
}

const emptyProducts = (state, action) => {
    return {
        ...state,
        products: [],
        product: null,
        loading: false,
        error: ''
    }
}

const sortByPriceInc = (state, action) => {
    return {
        ...state,
        products: state.products.slice().sort( 
            function(a, b) { 
                return a.price - b.price;
            }
        )
    }
}

const sortByPriceDec = (state, action) => {
    return {
        ...state,
        products: state.products.slice().sort( 
            function(a, b) { 
                return b.price - a.price;
            }
        )
    }
}

const sortByNameInc = (state, action) => {
    return {
        ...state,
        products: state.products.slice().sort( 
            function(a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
            }
        )
    }
}

const sortByNameDec = (state, action) => {
    return {
        ...state,
        products: state.products.slice().sort( 
            function(a, b) {
                if (b.name > a.name) {
                  return 1;
                }
                if (b.name < a.name) {
                  return -1;
                }
                return 0;
            }
        )
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_START:
            return fetchProductsStart(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_PRODUCTS_FAILED:
            return fetchProductsFailed(state, action);
        case actionTypes.FETCH_PRODUCT_START:
            return fetchProductStart(state, action);
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return fetchProductSuccess(state, action);
        case actionTypes.FETCH_PRODUCT_FAILED:
            return fetchProductFailed(state, action);
        case actionTypes.ADD_PRODUCT:
            return {...state}
        case actionTypes.REMOVE_PRODUCT:
            return {...state}
        case actionTypes.SELECTED_PRODUCT:
            return selectedProduct(state, action);
        case actionTypes.EMPTY_PRODUCTS:
            return emptyProducts(state, action);
        case actionTypes.SORT_BY_PRICE_INC:
            return sortByPriceInc(state, action);
        case actionTypes.SORT_BY_PRICE_DEC:
            return sortByPriceDec(state, action);
        case actionTypes.SORT_BY_NAME_INC:
            return sortByNameInc(state, action);
        case actionTypes.SORT_BY_NAME_DEC:
            return sortByNameDec(state, action);
        default: 
            return state; 
    }
};

export default reducer;