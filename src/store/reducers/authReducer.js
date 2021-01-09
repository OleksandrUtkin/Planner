import {GET_DATA_SUCCESS} from '../actions/signUp';
import {GET_DATA_FAILURE} from '../actions/signUp';

const initialState = {
    dateOfBirth: null,
    name: null,
    errorMessage: null,
    email: null,
    authorized: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS :
            return {
                ...state,
                name: action.payload.nameValue,
                email: action.payload.emailValue,
                authorized: true
            };
        case GET_DATA_FAILURE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        default:
            return state
    }

};

export default authReducer;