import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";

const { combineReducers } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    blogs : blogReducer,
    filters : filterReducer
});
export default rootReducer;