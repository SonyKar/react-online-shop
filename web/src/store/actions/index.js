export {
    fetchCollections,
    addCollection,
    updateCollection,
    removeCollection
} from './collection';
export {
    fetchProducts,
    fetchProduct,
    addProduct,
    updateProduct,
    removeProduct,
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
    emptyCart,
    mergeCartAndFetch
} from './cart';

export {
    login,
    signup,
    logout,
    cleanAuth
} from './auth';