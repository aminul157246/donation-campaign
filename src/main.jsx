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
// import PieChart from './Components/PieChart/PieChart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : () => fetch('donation.json')
      },
      {
        path : "/details/:id",
        element : <CardDetails></CardDetails>,
        loader : () => fetch(`/donation.json`),
      },
      {
        path : "/viewDetails/:id",
        element : <ViewDetails></ViewDetails>,
        loader : () => fetch(`/donation.json`),
      },
      {
        path : "/donation",
        element : <Donation></Donation>
      },
      {
        path : "/statistics",
        element : <Statistics></Statistics>,
        loader : () => fetch(`/donation.json`),

      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
