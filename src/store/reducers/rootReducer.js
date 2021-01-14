import authReducer from "./authReducer";
import lifeGoalsReducer from "./lifeGoalsReducer";
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    lifeGoals: lifeGoalsReducer,
    firestore: firestoreReducer
});

export default rootReducer;