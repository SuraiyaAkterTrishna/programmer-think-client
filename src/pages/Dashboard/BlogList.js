import React from 'react';
import { useSelector } from 'react-redux';
import BlogTable from '../../components/BlogTable';

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog,index)=><BlogTable key={blog._id} blog={blog} index={index} />)}
                </tbody>

            </table>
        </div>
    );
};

export default BlogList;