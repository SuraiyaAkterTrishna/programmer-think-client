import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
import Navbar from "./Navbar";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBlogs()) }, [dispatch]);
  return (
    <div className='px-10'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
