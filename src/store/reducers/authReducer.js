import {
    GET_DATA_FAILURE,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    RESTORE_PASSWORD_SUCCESS,
    RESTORE_PASSWORD_FAILURE
} from '../actions/auth';

const initialState = {
    dateOfBirth: null,
    errorMessage: null,
    message: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_FAILURE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case RESTORE_PASSWORD_SUCCESS:
            return {
                ...state,
                message: action.payload
            };
        case RESTORE_PASSWORD_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        default:
            return state
    }

};

export default authReducer;