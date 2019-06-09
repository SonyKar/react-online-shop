import * as actionTypes from '../actions/actionTypes';

const initialState = {
    person: {
        login: '',
        role: ''
    }
};

const logIn = (state, action) => {
    return {
        ...state,
        person: {
            ...state.person,
            login: 'admin',
            role: 'admin'
        }
    }
}

const logOut = (state, action) => {
    return {
        ...state,
        person: {
            login: '',
            role: ''
        }
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOG_IN:
            return logIn(state, action);
        case actionTypes.LOG_OUT:
            return logOut(state, action);
        default:
            return state;
    }
}

export default reducer;