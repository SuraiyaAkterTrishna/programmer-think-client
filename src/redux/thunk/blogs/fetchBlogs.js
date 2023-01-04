import { loadBlogs } from '../../actions/blogActions';

const fetchBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();
        if(data.length){
            dispatch(loadBlogs(data));
        }
    }
};

export default fetchBlogs;