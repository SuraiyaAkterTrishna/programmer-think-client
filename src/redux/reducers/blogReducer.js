import { ADD_CONTENT, ADD_HISTORY, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    blogs : [],
    history : []
};

const blogReducer = (state=initialState, action) => {
    const selectedBlog = state.history.find(data=>data._id===action.payload._id);
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                blogs : action.payload
            };

        case ADD_CONTENT:
            return {
                ...state,
                blogs : [...state.blogs, action.payload]
            };

        case UPDATE_CONTENT:
            return {
                ...state,
                blogs : [...state.blogs.filter(blog=>blog._id!==action.payload._id),action.payload]
            };

        case DELETE_CONTENT:
            return {
                ...state,
                blogs : state.blogs.filter(blog=>blog._id!==action.payload),
            };

        case ADD_HISTORY:
            if(selectedBlog){
                selectedBlog.position++
                return {
                    ...state,
                    history : [...state.history.filter(data=>data._id!==selectedBlog._id), selectedBlog]
                }
            } else {
                return {
                    ...state,
                    history : [...state.history, action.payload]
                };
            }
            
    
        default:
            return state;
    }
};

export default blogReducer;