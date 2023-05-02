import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import SingleChef from "../Chef/SingleChef";
import ErrorPage from "../Shared/ErrorPage";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/chef/:id",
    element: <PrivetRoute><SingleChef></SingleChef></PrivetRoute> ,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ({ params }) => fetch(`https://hero-chef-server-ajwebdevlopment-gmailcom.vercel.app/allChef/${params.id}`),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
  {
    path: '/blog',
    element: <Blog></Blog>
  }
]);

export default router;
