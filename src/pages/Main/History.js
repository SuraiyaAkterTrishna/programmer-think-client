import React from 'react';
import {  useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';

const History = () => {
  const history = useSelector((state) => state.blogs.history);
    return (
        <div>
      <div className='container mx-auto px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {history.sort((a,b)=>a.cartPosition>b.cartPosition ? -1 : 1).map(blog => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </div>
    );
};

export default History;