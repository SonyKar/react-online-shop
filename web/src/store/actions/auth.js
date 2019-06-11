import * as actionTypes from '../actions/actionTypes';
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

export const login = (login, password) => {
    return dispatch => {
        dispatch(loginStart());
        let formData = new FormData();
        formData.append('login', login);
        formData.append('password', password);

        axios.post('/response/auth/login.php', formData)
            .then(res => {
                if (res.data.error === undefined) dispatch(loginSuccess(login, res.data.role));
                else dispatch(loginFailed(res.data.error));
            })
            .catch(error => {
                dispatch(loginFailed(error));
            })
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOG_OUT
    };
};