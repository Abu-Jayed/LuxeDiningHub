import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../Layout/Layout';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import SingleChef from '../Chef/SingleChef';
import ErrorPage from '../Shared/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    // children: [
    //   {
    //     path: '/login',
    //     element: <Login></Login>
    //   },
    //   {
    //     path: '/register',
    //     element: <Register></Register>
    //   }
    // ]
  },
  {
    path: '/chef/:id',
    element: <SingleChef></SingleChef>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: ({params}) => fetch(`http://localhost:3000/allChef/${params.id}`)
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default router;