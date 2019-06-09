import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products
    };
};

export const fetchProductsFailed = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,
        error: error
    };
};

export const fetchProducts = (collectionId) => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get('/response/products/products.php?collection=' + collectionId)
            .then(res => {
                if (res.data.error !== undefined) {
                    dispatch(fetchProductsFailed(res.data.error));
                } else {
                    const fetchedProducts = [];
                    for (let key in res.data) {
                        fetchedProducts.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    dispatch(fetchProductsSuccess(fetchedProducts));
                }
            })
            .catch(error => {
                dispatch(fetchProductsFailed(error));
            });
    };
};

export const addProduct = () => {
    return {
        type: actionTypes.ADD_PRODUCT
    };
};

export const removeProduct = () => {
    return {
        type: actionTypes.REMOVE_PRODUCT
    };
};

export const selectedProduct = (id) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        id: id
    };
};

export const emptyProducts = () => {
    return {
        type: actionTypes.EMPTY_PRODUCTS
    };
};

export const sortByPriceInc = () => {
    return {
        type: actionTypes.SORT_BY_PRICE_INC
    }
}

export const sortByPriceDec = () => {
    return {
        type: actionTypes.SORT_BY_PRICE_DEC
    }
}

export const sortByNameInc = () => {
    return {
        type: actionTypes.SORT_BY_NAME_INC
    }
}

export const sortByNameDec = () => {
    return {
        type: actionTypes.SORT_BY_NAME_DEC
    }
}