import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineChatAlt2, HiOutlineUser } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../redux/actions/blogActions';

const BlogCard = ({blog}) => {
    const {_id, title ,description, image, author, date, tags} = blog;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigateToBlogDetail = blog => {
      dispatch(addHistory(blog));
      navigate(`blog-detail/${blog._id}`);
  }
    return (
        <div className="card border w-full rounded-none">
            <img src={image} alt="blog" className='h-fit lg:h-72' />
            <div className="card-body">
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <HiOutlineUser className='text-primary mr-2' /><p className='text-slate-400 text-sm'>{author}</p>
                </div>
                <div className='flex items-center'>
                  <HiOutlineChatAlt2 className='text-primary mr-2' /><p className='text-slate-400 text-sm'>(0)</p>
                </div>
                <div className='flex items-center'>
                  <AiOutlineCalendar className='text-primary mr-2' /><p className='text-slate-400 text-sm'>{date}</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold my-4">{title}</h2>
              <div className='d-flex'>
                {tags.map((tag,index) => <button className='mr-2 bg-accent px-1 rounded text-white' key={index}>{tag}</button>)}
              </div>
              <p className='mb-6'>{description.slice(0,200)}...</p>
              <div>
                <button className="btn btn-primary text-white rounded-sm" onClick={()=>navigateToBlogDetail(blog)}>read more</button>
              </div>
            </div>
          </div>
    );
};

export default BlogCard;