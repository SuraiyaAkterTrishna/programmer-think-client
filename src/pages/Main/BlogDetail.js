import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlineChatAlt2, HiOutlineUser } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const blogs = useSelector((state) => state.blogs.blogs);
    const selectedBlog = blogs.find(blog => blog._id === id);
    const { title, description, image, author, tags, date } = selectedBlog;
    return (
        <div className="card bg-base-100 container mx-auto">
            <figure>
                <img src={image} className="lg:min-w-fit" alt="" />
            </figure>

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
                <h2 className="text-4xl font-bold">{title}</h2>
                <p>{description}</p>
                <p>Author Name: {author}</p>
                <p>Tags:</p>
                <div className='d-flex'>
                    {tags.map((tag, index) => <button className='mr-2 bg-accent px-1 rounded text-white' key={index}>{tag}</button>)}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;