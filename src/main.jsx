import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Layout from './Components/Layout/Layout';
import CardDetails from './Components/CardDetails/CardDetails';
import ViewDetails from './Components/View Details/ViewDetails';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('/donationData.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path : "/details/:id",
        element : <CardDetails></CardDetails>,
        loader : () => fetch(`/donationData.json`),
      },
      {
        path : "/viewDetails/:id",
        element : <ViewDetails></ViewDetails>,
        loader : () => fetch(`/donationData.json`),
      },
      {
        path : "/donation",
        element : <Donation></Donation>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>,
        loader : () => fetch(`/donationData.json`),
        errorElement: <ErrorPage></ErrorPage>,

      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
