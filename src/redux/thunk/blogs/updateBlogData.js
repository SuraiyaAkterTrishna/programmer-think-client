
import { updateBlog } from '../../actions/blogActions';

const updateBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${blog._id}`,{
            method: "PUT",
            body: JSON.stringify(blog),
            headers: {
                "Content-type" : "application/json",
            },
        });
        const data = await res.json();
        if(data.acknowledged){
            dispatch(updateBlog(blog));
        }
    }
};

export default updateBlogData;