import { ADD_HISTORY } from "../actionTypes/actionTypes";

const historyCounter = (store) => (next) => (action) => {
    const state = store.getState();
    console.log(state);
    const history = state.blogs.history;
    if (action.type === ADD_HISTORY) {
        const newAction = {
            ...action,
            payload: {
                ...action.payload,
                cartPosition : history.length
            }
        };
        return next(newAction);
    }
    return next(action);
}

export default historyCounter;