
import rootReducer from "./reducers/rootReducer"
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import historyCounter from "./middleware/historyCounter";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, historyCounter)));

export default store;