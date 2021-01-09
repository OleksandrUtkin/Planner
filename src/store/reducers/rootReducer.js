import authReducer from "./authReducer";
import lifeGoalsReducer from "./lifeGoalsReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    lifeGoals: lifeGoalsReducer
});

export default rootReducer;