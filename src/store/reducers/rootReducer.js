import authReducer from "./authReducer";
import lifeGoalsReducer from "./lifeGoalsReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    lifeGoals: lifeGoalsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;