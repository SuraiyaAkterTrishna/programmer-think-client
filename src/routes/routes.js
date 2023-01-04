import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import BlogList from "../pages/Dashboard/BlogList";
import AddBlog from "../pages/Dashboard/AddBlog";
import UpdateBlog from "../pages/Dashboard/UpdateBlog";
import BlogDetail from "../pages/Main/BlogDetail";
import History from "../pages/Main/History";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "history/blog-detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "blog-detail/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "update-blog/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);

export default routes;
