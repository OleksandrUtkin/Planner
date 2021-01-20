import 'firebase/firestore';
import firebase from "../../config/fbConfig";
const db = firebase.firestore();

export const GET_DATA_FAILURE = 'GET_REPOS_FAILURE';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const RESTORE_PASSWORD_SUCCESS = 'RESTORE_PASSWORD_SUCCESS';
export const RESTORE_PASSWORD_FAILURE = 'RESTORE_PASSWORD_FAILURE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const logInFailure = (errorMessage) => {
    return {
        type: LOG_IN_FAILURE,
        payload: errorMessage
    }
};

export const signUpFailure = (data) => {
    return {
        type: GET_DATA_FAILURE,
        payload: data
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

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES
    }
};

export const logIn = ({emailValue, passwordValue}) => {
    return async dispatch => {
        try {
            if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else {
                await firebase.app().auth().signInWithEmailAndPassword(emailValue, passwordValue);
            }
        } catch (err) {
            dispatch(logInFailure(err.message));
            console.log(err.message);
        }
    }
};

const signUp = ({nameValue, emailValue, passwordValue, confirmPasswordValue, dayOfBirth, monthOfBirth, yearOfBirth}) => {
    return async (dispatch) => {
        try {
            if (passwordValue !== confirmPasswordValue) {
                throw new Error('Password do not match');
            } else if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else if (!dayOfBirth || !monthOfBirth || !yearOfBirth) {
                throw new Error('Date of birth is not correct');
            } else {
                await firebase.app().auth().createUserWithEmailAndPassword(emailValue, passwordValue).then(cred => {
                    db.collection('users').doc(cred.user.uid).set({
                        userName: nameValue,
                        dateOfBirth: `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`
                    });
                });
            }
        } catch (err) {
            dispatch(signUpFailure({errorMessage: err.message}));
        }
    }
};

export const logOut = () => {
    return async () => {
        try {
            await firebase.app().auth().signOut();
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

export default signUp;