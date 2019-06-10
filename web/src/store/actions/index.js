export {
    fetchCollections
} from './collection';
export {
    fetchProducts,
    fetchProduct,
    addProduct,
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
    removeFromCartDB,
    removeFromCart,
    updateCart,
    updateCartDB,
    fetchCart,
    emptyCart
} from './cart';

export {
    logIn,
    logOut
} from './auth';