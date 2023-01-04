import { ADD_CONTENT, ADD_HISTORY, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const loadBlogs = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
}
export const addBlog = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
}
export const updateBlog = (data) => {
    return {
        type: UPDATE_CONTENT,
        payload: data
    }
}
export const deleteBlog = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}
export const addHistory = (data) => {
    return {
        type: ADD_HISTORY,
        payload: data
    }
}
