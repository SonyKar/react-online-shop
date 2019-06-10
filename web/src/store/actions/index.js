export {
    fetchCollections
} from './collection';
export {
    fetchProducts,
    fetchProduct,
    selectedProduct,
    emptyProducts,
    sortByPriceInc,
    sortByPriceDec,
    sortByNameInc,
    sortByNameDec
} from './shop';
export {
    addToCart,
    addToCartDB,
    removeFromCart,
    updateCart,
    fetchCart,
    emptyCart
} from './cart';

export {
    logIn,
    logOut
} from './auth';