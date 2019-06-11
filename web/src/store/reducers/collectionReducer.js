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
    newCollections.unshift(action.collection);
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
        default: 
            return state;
    }
}

export default reducer;