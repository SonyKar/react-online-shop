import * as actionTypes from '../actions/actionTypes';

const initialState = {
    person: {
        login: '',
        role: ''
    },
    loading: false,
    error: ''
};

const loginStart = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

const loginSuccess = (state, action) => {
    return {
        ...state,
        person: {
            ...state.person,
            login: action.login,
            role: action.role
        },
        loading: false,
        error: ''
    };
};

const loginFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
};

const logout = (state, action) => {
    return {
        ...state,
        person: {
            login: '',
            role: ''
        },
        loading: false,
        error: ''
    };
;}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG_IN_START:
            return loginStart(state, action);
        case actionTypes.LOG_IN_SUCCESS:
            return loginSuccess(state, action);
        case actionTypes.LOG_IN_FAILED:
            return loginFailed(state, action);
        case actionTypes.LOG_OUT:
            return logout(state, action);
        default:
            return state;
    }
}

export default reducer;