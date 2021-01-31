import 'firebase/firestore';
import firebase from "../../config/fbConfig";
const db = firebase.firestore();

export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const RESTORE_PASSWORD_SUCCESS = 'RESTORE_PASSWORD_SUCCESS';
export const RESTORE_PASSWORD_FAILURE = 'RESTORE_PASSWORD_FAILURE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';
export const LOGOUT = 'LOGOUT';

type LogInFailureType = {
    type: typeof LOG_IN_FAILURE
    payload: string
}
type SignUpFailureType = {
    type: typeof GET_DATA_FAILURE
    payload: string
}
type RestorePasswordSuccessType = {
    type: typeof RESTORE_PASSWORD_SUCCESS
    payload: string
}
type RestorePasswordFailureType = {
    type: typeof RESTORE_PASSWORD_FAILURE
    payload: string
}
type ClearMessages = {
    type: typeof CLEAR_MESSAGES
}
type LogOut = {
    type: typeof LOGOUT
}

export const logInFailure = (errorMessage : string) : LogInFailureType => {
    return {
        type: LOG_IN_FAILURE,
        payload: errorMessage
    }
};

export const signUpFailure = (message : string) : SignUpFailureType => {
    return {
        type: GET_DATA_FAILURE,
        payload: message
    }
};

export const restorePasswordSuccess = (message : string) : RestorePasswordSuccessType => {
    return {
        type: RESTORE_PASSWORD_SUCCESS,
        payload: message
    }
};

export const restorePasswordFailure = (message : string) : RestorePasswordFailureType => {
    return {
        type: RESTORE_PASSWORD_FAILURE,
        payload: message
    }
};

export const clearMessages = () : ClearMessages => {
    return {
        type: CLEAR_MESSAGES
    }
};

const logOutAction = () :LogOut => {
    return  {
        type: LOGOUT
    }
};

interface LogInType {
    emailValue: string
    passwordValue: string
}

export const logIn = ({emailValue, passwordValue} : LogInType) => {
    return async (dispatch : any)  => {
        try {
            if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else {
                await firebase.app().auth().signInWithEmailAndPassword(emailValue, passwordValue);
            }
        } catch (err) {
            dispatch(logInFailure(err.message));
        }
    }
};

interface SignUpType {
    nameValue: string
    emailValue: string
    passwordValue: string
    confirmPasswordValue: string
    dayOfBirth: string
    monthOfBirth: string
    yearOfBirth: string
}

const signUp = ({nameValue, emailValue, passwordValue, confirmPasswordValue, dayOfBirth, monthOfBirth, yearOfBirth} : SignUpType) => {
    return async (dispatch : any) => {
        try {
            if (passwordValue !== confirmPasswordValue) {
                throw new Error('Password do not match');
            } else if (passwordValue.length < 6) {
                throw new Error('Password must be at least 6 characters');
            } else if (!dayOfBirth || !monthOfBirth || !yearOfBirth) {
                throw new Error('Date of birth is not correct');
            } else {
                await firebase.app().auth().createUserWithEmailAndPassword(emailValue, passwordValue).then(cred => {
                    if (cred.user !== null) {
                        db.collection('users').doc(cred.user.uid).set({
                            userName: nameValue,
                            dateOfBirth: `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
                            liveYears: 80
                        });
                    }
                });
            }
        } catch (err) {
            dispatch(signUpFailure(err.message));
        }
    }
};

export const logOut = () => {
    return async (dispatch: any) => {
        try {
            await firebase.app().auth().signOut();
            await dispatch(logOutAction);
        } catch (err) {
            console.log(err.message);
        }
    }
};

export const restorePasswordAction = (emailValue : string) => {
    return async (dispatch : any) => {
        try {
            await firebase.app().auth().sendPasswordResetEmail(emailValue);
            await dispatch(restorePasswordSuccess('Check your inbox for further instructions'))
        } catch (err) {
            await dispatch(restorePasswordFailure(err.message))
        }
    }
};

export default signUp;