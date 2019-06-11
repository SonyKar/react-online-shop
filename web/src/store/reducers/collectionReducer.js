import * as actionTypes from '../actions/actionTypes';

const initialState = {
    collections: [],
    loading: false,
    purchased: false
};

const fetchCollectionsStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const fetchCollectionsSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        collections: action.collections
    }
}

const fetchCollectionsFailed = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const addCollectionStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const addCollectionSuccess = (state, action) => {
    let newCollections = state.collections.slice();
    newCollections.push(action.collection);
    return {
        ...state,
        loading: false,
        collections: newCollections
    };
};

const addCollectionFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const updateCollectionStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const updateCollectionSuccess = (state, action) => {
    const oldCollections = state.collections.slice();
    const newCollections = oldCollections.map(collection => {
        if (+collection.id === +action.id) {
            let updatedCollection = {
                ...collection,
                name: action.name
            };
            if (action.image) {
                updatedCollection.image = action.image;
            }
            return updatedCollection;
        }
        return collection;
    });
    return {
        ...state,
        loading: false,
        collections: newCollections
    };
};

const updateCollectionFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const removeCollectionStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const removeCollectionSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        collections: state.collections.slice().filter(collection => +collection.id !== +action.id)
    };
};

const removeCollectionFailed = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_COLLECTIONS_START:
            return fetchCollectionsStart(state, action);
        case actionTypes.FETCH_COLLECTIONS_SUCCESS:
            return fetchCollectionsSuccess(state, action);
        case actionTypes.FETCH_COLLECTIONS_FAILED:
            return fetchCollectionsFailed(state, action);
        case actionTypes.ADD_COLLECTION_START:
            return addCollectionStart(state, action);
        case actionTypes.ADD_COLLECTION_SUCCESS:
            return addCollectionSuccess(state, action);
        case actionTypes.ADD_COLLECTION_FAILED:
            return addCollectionFailed(state, action);
        case actionTypes.UPDATE_COLLECTION_START:
            return updateCollectionStart(state, action);
        case actionTypes.UPDATE_COLLECTION_SUCCESS:
            return updateCollectionSuccess(state, action);
        case actionTypes.UPDATE_COLLECTION_FAILED:
            return removeCollectionFailed(state, action);
        case actionTypes.REMOVE_COLLECTION_START:
            return removeCollectionStart(state, action);
        case actionTypes.REMOVE_COLLECTION_SUCCESS:
            return removeCollectionSuccess(state, action);
        case actionTypes.REMOVE_COLLECTION_FAILED:
            return updateCollectionFailed(state, action);
        default: 
            return state;
    }
}

export default reducer;