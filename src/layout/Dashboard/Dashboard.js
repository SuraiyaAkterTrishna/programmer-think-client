import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBlogs()) }, [dispatch]);
  return (
    <div className='grid grid-cols-12 p-3 gap-3 '>
      <Sidebar />
      <div className='col-span-10 w-full bg-gray-100 rounded-lg'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
