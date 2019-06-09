import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchCollectionsStart = () => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_START
    };
};

export const fetchCollectionsSuccess = (collections) => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
        collections: collections
    };
};

export const fetchCollectionsFailed = (error) => {
    return {
        type: actionTypes.FETCH_COLLECTIONS_FAILED,
        error: error
    };
};

export const fetchCollections = () => {
    return dispatch => {
        dispatch(fetchCollectionsStart());
        axios.get('/response/collections/collections.php')
            .then (res => {
                const fetchedCollections = [];
                for (let key in res.data) {
                    fetchedCollections.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchCollectionsSuccess(fetchedCollections));
            })
            .catch (error => {
                dispatch(fetchCollectionsFailed(error));
            });
    }
}