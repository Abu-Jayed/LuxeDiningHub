import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
]);

export default router;