import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './components/Root';
import Home from './pages/Home';
import UpdateProfile from './pages/UpdateProfile';
import UserProfile from './pages/UserProfile';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/updateprofile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/userprofile',
        element:<UserProfile></UserProfile>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contactus',
        element:<ContactUs></ContactUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
