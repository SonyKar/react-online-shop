import * as actionTypes from '../actions/actionTypes';

export const setProducts = () => {
    return {
        type: actionTypes.SET_PRODUCTS
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