import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { filterBlog } from "../../redux/actions/filterActions";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const filter = state.filters.filter;
  const blogs = state.blogs.blogs;
  let content;
  if (filter === "last") {
    content = blogs.sort((a,b)=>a.date>b.date ? -1 : 1).map(blog => <BlogCard key={blog._id} blog={blog} />);
  } else {
    content = blogs.sort((a,b)=>a.date>b.date ? 1 : -1).map(blog => <BlogCard key={blog._id} blog={blog} />);
  }
  
  return (
    <div>
      <div className='container mx-auto px-8'>
        <div className='flex gap-20 py-20'>
          <div className='w-auto lg:w-4/5'>
            <h2 className='text-6xl font-bold mt-8'><strong>Hey, we’re Programmer Think.</strong> See our thoughts, stories and ideas.</h2>
          </div>
          <div className='w-auto lg:w-1/5 flex justify-end items-end'>
            <select className="select select-primary max-w-xs" onChange={(e)=>{
              const selected = e.target.value; 
              dispatch(filterBlog(selected));
              }}>
              <option value="first">sort by first upload</option>
              <option value="last">sort by last upload</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Home;
