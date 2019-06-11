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

export const addCollectionStart = () => {
    return {
        type: actionTypes.ADD_COLLECTION_START
    };
};

export const addCollectionSuccess = (name, image, id) => {
    return {
        type: actionTypes.ADD_COLLECTION_SUCCESS,
        collection: {
            name: name,
            image: image,
            id: id
        }
    };
};

export const addCollectionFailed = (error) => {
    return {
        type: actionTypes.ADD_COLLECTION_FAILED,
        error: error
    };
};

export const addCollection = (name, image) => {
    return dispatch => {
        dispatch(addCollectionStart());
        let formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        axios.post('/response/collections/addCollection.php', formData)
            .then(res => {
                console.log(res.data);
                if (res.data.error === undefined) dispatch(addCollectionSuccess(name, image.name, res.data));
                else dispatch(addCollectionFailed(res.data.error));
            })
            .catch(error => {
                dispatch(addCollectionFailed(error));
            });
    };
};