import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addBlogData from '../../redux/thunk/blogs/addBlogData';

const AddBlog = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
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
            title: data.title,
            image: data.image,
            description: data.description,
            author: data.author,
            date: currentDate,
            tags: [
                data.tag1,
                data.tag2,
                data.tag3,
                data.tag4,
            ],
        }
        console.log(blog);
        dispatch(addBlogData(blog));
    }
    
    return (
        <div className="w-1/2 mx-auto mb-5">
            <h2 className="text-8xl text-primary font-bold">Add a New Blog</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Blog Title"
                        className="input input-bordered w-full"
                        {...register("title", {
                            required: {
                                value: true,
                                message: "Blog Title is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.title?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.title.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Description"
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Blog Description is Required",
                            },
                        })}
                    >
                    </textarea>
                    <label className="label">
                        {errors.description?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.description.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Blog image"
                        className="input input-bordered w-full"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Blog Image is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.image.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Author Name"
                        className="input input-bordered w-full"
                        {...register("author", {
                            required: {
                                value: true,
                                message: "Author Name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.author?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.author.message}
                            </span>
                        )}
                    </label>
                </div>
                <label className="label">
                    <span className="label-text">Tags</span>
                </label>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-1 my-2'>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Tag 1"
                            className="input input-bordered input-xs"
                            {...register("tag1")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Tag 2"
                            className="input input-bordered w-full input-xs"
                            {...register("tag2")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Tag 3"
                            className="input input-bordered w-full input-xs"
                            {...register("tag3")}
                        />
                    </div>
                    <div className="form-control w-full">
                        <input
                            type="text"
                            placeholder="Tag 4"
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

export default AddBlog;