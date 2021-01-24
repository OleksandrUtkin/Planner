import {
    GET_DATA_FAILURE,
    LOG_IN_FAILURE,
    RESTORE_PASSWORD_SUCCESS,
    RESTORE_PASSWORD_FAILURE,
    CLEAR_MESSAGES
} from '../actions/auth';

export type InitialStateType = {
    errorMessage: null | string
    message: null | string
};

const initialState : InitialStateType = {
    errorMessage: null,
    message: null
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_DATA_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
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
        case CLEAR_MESSAGES:
            return initialState;
        default:
            return state
    }

};

export default authReducer;