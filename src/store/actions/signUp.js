// import firebase from "firebase";
import firebaseReady from "../../firebase";

export const GET_DATA_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_DATA_FAILURE = 'GET_REPOS_FAILURE';

export const signUpSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
};

export const signUpFailure = (data) => {
    return {
        type: GET_DATA_FAILURE,
        payload: data
    }
};

const sendLoginData = ({nameValue, emailValue, passwordValue, confirmPasswordValue}) => {
    return async dispatch => {
        try {
            if (passwordValue !== confirmPasswordValue) {
                throw new Error('Password do not match');
            } else if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else {
                await firebaseReady.auth().createUserWithEmailAndPassword(emailValue, passwordValue);
                await dispatch(signUpSuccess({nameValue, emailValue}));
            }
        } catch (err) {
            dispatch(signUpFailure({errorMessage: err.message}));
        }
    }

};

export default sendLoginData;