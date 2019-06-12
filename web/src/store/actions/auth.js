import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';
import axios from '../../axios';

export const loginStart = () => {
    return {
        type: actionTypes.LOG_IN_START
    };
};

export const loginSuccess = (login, role) => {
    return {
        type: actionTypes.LOG_IN_SUCCESS,
        login: login,
        role: role
    };
};

export const loginFailed = (error) => {
    return {
        type: actionTypes.LOG_IN_FAILED,
        error: error
    };
};

export const login = (login, password, products) => {
    return dispatch => {
        dispatch(loginStart());
        let formData = new FormData();
        formData.append('login', login);
        formData.append('password', password);

        axios.post('/response/auth/login.php', formData)
            .then(res => {
                if (res.data.error === undefined) {
                    dispatch(loginSuccess(login, res.data.role));
                    if (products.length !== 0) dispatch(actions.mergeCartAndFetch(products, login));
                }
                else dispatch(loginFailed(res.data.error));
            })
            .catch(error => {
                dispatch(loginFailed(error));
            })
    }
}

export const signupStart = () => {
    return {
        type: actionTypes.SIGN_UP_START
    };
};

export const signupSuccess = (login, role) => {
    return {
        type: actionTypes.SIGN_UP_SUCCESS,
        login: login,
        role: role
    };
};

export const signupFailed = (error) => {
    return {
        type: actionTypes.SIGN_UP_FAILED,
        error: error
    };
};

export const signup = (login, password, password2, products) => {
    return dispatch => {
        dispatch(signupStart());
        let formData = new FormData();
        formData.append('login', login);
        formData.append('password', password);
        formData.append('password2', password2);

        axios.post('/response/auth/signup.php', formData)
            .then(res => {
                if (res.data.error === undefined) {
                    dispatch(signupSuccess(login, res.data.role));
                    if (products.length !== 0) dispatch(actions.mergeCartAndFetch(products, login));
                }
                else dispatch(signupFailed(res.data.error));
            })
            .catch(error => {
                dispatch(signupFailed(error));
            })
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};

export const cleanAuth = () => {
    return {
        type: actionTypes.CLEAN_AUTH
    };
};