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
                        fetchedProducts.unshift({
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

export const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    };
};

export const fetchProductSuccess = (product) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        product: product
    };
};

export const fetchProductFailed = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAILED,
        error: error
    };
};

export const fetchProduct = (productId, collectionId) => {
    return dispatch => {
        dispatch(fetchProductStart());
        axios.get('/response/products/product.php?collection=' + collectionId + '&id=' + productId)
            .then(res => {
                if (res.data.error !== undefined) {
                    dispatch(fetchProductFailed(res.data.error));
                } else {
                    dispatch(fetchProductSuccess(res.data));
                }
            })
            .catch(error => {
                dispatch(fetchProductFailed(error));
            });
    };
};

export const addProductStart = () => {
    return {
        type: actionTypes.ADD_PRODUCT_START
    };
};

export const addProductSuccess = (name, price, image, desc, id) => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        product: {
            name: name,
            price: price,
            image: image,
            desc: desc,
            id: id
        }
    };
};

export const addProductFailed = (error) => {
    return {
        type: actionTypes.ADD_PRODUCT_FAILED,
        error: error
    };
};

export const addProduct = (name, price, desc, image, collectionId) => {
    return dispatch => {
        dispatch(addProductStart());
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('collectionId', collectionId);
        axios.post('/response/products/addProduct.php', formData)
            .then(res => {
                if (res.data.error === undefined) {
                    dispatch(addProductSuccess(name, price, image.name, desc, res.data));
                }
                else dispatch(addProductFailed(res.data.error));
            })
            .catch(error => {
                dispatch(addProductFailed(error));
            });
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