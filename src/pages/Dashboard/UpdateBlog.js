import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import updateBlogData from '../../redux/thunk/blogs/updateBlogData';

const UpdateBlog = () => {
    const {id} = useParams();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    const blogs = useSelector((state) => state.blogs.blogs);
    const selectedBlog = blogs.find(blog=>blog._id===id);
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data);
        const blog = {
            _id: id,
            title: data.title ? data.title : selectedBlog.title,
            image: data.image ? data.image : selectedBlog.image,
            description: data.description ? data.description : selectedBlog.description,
            author: data.author ? data.author : selectedBlog.author,
            date: currentDate,
            tags: [
                data.tag1 ? data.tag1 : selectedBlog.tags[0],
                data.tag2 ? data.tag2 : selectedBlog.tags[1],
                data.tag3 ? data.tag3 : selectedBlog.tags[2],
                data.tag4 ? data.tag4 : selectedBlog.tags[3],
            ],
        }
        console.log(blog);
        dispatch(updateBlogData(blog));
    }
    
    return (
        <div className="w-1/2 mx-auto mb-5">
            <h2 className="text-8xl text-primary font-bold">Update Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder={selectedBlog.title}
                        className="input input-bordered w-full"
                        {...register("title")}
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder={selectedBlog.description}
                        {...register("description")}
                    >
                    </textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder={selectedBlog.image}
                        className="input input-bordered w-full"
                        {...register("image")}
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder={selectedBlog.author}
                        className="input input-bordered w-full"
                        {...register("author")}
                    />
                </div>
                <label className="label">
                    <span className="label-text">Tags</span>
                </label>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 my-2'>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder={selectedBlog?.tags[0]}
                            className="input input-bordered input-xs"
                            {...register("tag1")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder={selectedBlog?.tags[1]}
                            className="input input-bordered w-full input-xs"
                            {...register("tag2")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder={selectedBlog?.tags[2]}
                            className="input input-bordered w-full input-xs"
                            {...register("tag3")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder={selectedBlog?.tags[3]}
                            className="input input-bordered w-full input-xs"
                            {...register("tag4")}
                        />
                    </div>
                </div>

                <input
                    className="btn btn-primary w-full text-white"
                    type="submit"
                    value="Add Blog"
                />
            </form>
        </div>
    );
};

export default UpdateBlog;