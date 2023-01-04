import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import deleteBlogData from '../redux/thunk/blogs/deleteBlogData';

const BlogTable = ({blog, index}) => {
    const {_id, title, image, author} = blog;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navigateToBlog = id => {
        navigate(`update-blog/${id}`);
    }
    return (
        <tr className="hover">
            <th>{index+1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="blog img" />
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{author}</td>
            <th>
                <button className="btn btn-primary btn-xs mr-2" onClick={()=>navigateToBlog(_id)}>Update</button>
                <button className="btn btn-secondary btn-xs" onClick={()=>dispatch(deleteBlogData(_id))}>Delete</button>
            </th>
        </tr>
    );
};

export default BlogTable;