import { combineReducers } from "redux";
import clansReducer from "./ClansReducer";

const rootReducer = combineReducers ({
    clansReducer,

});
export default rootReducer;