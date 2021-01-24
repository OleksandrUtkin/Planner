import authReducer from "./authReducer";
import {combineReducers} from "redux";
// import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";
import {LOGOUT} from "../actions/auth";

const appReducer = combineReducers({
    auth: authReducer,
    // firestore: firestoreReducer,
    firebase: firebaseReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === LOGOUT) {
        state = undefined;
    }
    return appReducer(state, action);
};

export type RootReducerType = ReturnType<typeof appReducer>

export default rootReducer;