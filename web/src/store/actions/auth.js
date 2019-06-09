import * as actionTypes from '../actions/actionTypes';

export const logIn = () => {
    return {
        type: actionTypes.LOG_IN,
        role: 'admin',
        login: 'admin'
    }
}

export const logOut = () => {
    return {
        type: actionTypes.LOG_OUT
    }
}