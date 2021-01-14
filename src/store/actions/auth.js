import 'firebase/firestore';
import firebase from "../../config/fbConfig";
const db = firebase.firestore();

export const GET_DATA_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_DATA_FAILURE = 'GET_REPOS_FAILURE';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const RESTORE_PASSWORD_SUCCESS = 'RESTORE_PASSWORD_SUCCESS';
export const RESTORE_PASSWORD_FAILURE = 'RESTORE_PASSWORD_FAILURE';
export const CLEAR_STATE = 'CLEAR_STATE';

export const logInSuccess = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        payload: data
    }
};

export const logInFailure = (errorMessage) => {
    return {
        type: LOG_IN_FAILURE,
        payload: errorMessage
    }
};

export const signUpSuccess = (emailValue) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: emailValue
    }
};

export const signUpFailure = (data) => {
    return {
        type: GET_DATA_FAILURE,
        payload: data
    }
};

export const logOutAction = (authStatus) => {
    return {
        type: LOG_OUT,
        payload: authStatus
    }
};

export const restorePasswordSuccess = (message) => {
    return {
        type: RESTORE_PASSWORD_SUCCESS,
        payload: message
    }
};

export const restorePasswordFailure = (message) => {
    return {
        type: RESTORE_PASSWORD_SUCCESS,
        payload: message
    }
};

export const logIn = ({emailValue, passwordValue}) => {
    return async dispatch => {
        try {
            if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else {
                await firebase.app().auth().signInWithEmailAndPassword(emailValue, passwordValue);
                await dispatch(logInSuccess(emailValue));
            }
        } catch (err) {
            dispatch(logInFailure(err.message));
            console.log(err.message);
        }
    }
};

const sendLoginData = ({nameValue, emailValue, passwordValue, confirmPasswordValue}) => {
    return async (dispatch) => {
        try {
            if (passwordValue !== confirmPasswordValue) {
                throw new Error('Password do not match');
            } else if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else {
                await firebase.app().auth().createUserWithEmailAndPassword(emailValue, passwordValue).then(cred => {
                    db.collection('users').doc(cred.user.uid).set({
                        userName: nameValue
                    });
                });
                await dispatch(signUpSuccess({nameValue, emailValue}));
            }
        } catch (err) {
            dispatch(signUpFailure({errorMessage: err.message}));
        }
    }
};

export const logOut = (authStatus) => {
    return async dispatch => {
        try {
            await firebase.app().auth().signOut();
            await dispatch(logOutAction(authStatus));
        } catch (err) {
            console.log(err.message);
        }
    }
};

export const restorePasswordAction = (emailValue) => {
    return async dispatch => {
        try {
            await firebase.app().auth().sendPasswordResetEmail(emailValue);
            await dispatch(restorePasswordSuccess('Check your inbox for further instructions'))
        } catch (err) {
            await dispatch(restorePasswordFailure(err.message))
        }
    }
};

export default sendLoginData;