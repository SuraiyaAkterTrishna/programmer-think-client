import { FILTER_BLOG } from "../actionTypes/actionTypes";

const initialState = {
    filter : ""
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BLOG:
            if(state.filter !== action.payload){
                return {
                    ...state,
                    filter : action.payload
                }
            } else {
                return state;
            }
    
        default:
            return state;
    }
};

export default filterReducer;