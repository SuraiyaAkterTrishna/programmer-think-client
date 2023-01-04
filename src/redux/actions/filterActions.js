import { FILTER_BLOG } from "../actionTypes/actionTypes"

export const filterBlog = (data) => {
    return {
        type: FILTER_BLOG,
        payload: data
    }
}