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
import CardInfo from './pages/CardInfo';
import ErrorPage from './pages/ErrorPage';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/cart/:id',
        element:<PrivateRoute>
          <CardInfo></CardInfo>
        </PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/updateprofile',
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path:'/userprofile',
        element:<PrivateRoute>
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
      },
      {
        path:'/about',
        element:<PrivateRoute>
          <About></About>
        </PrivateRoute>
      },
      {
        path:'/contactus',
        element:<PrivateRoute>
          <ContactUs></ContactUs>
        </PrivateRoute>
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<Registration></Registration>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FirebaseProvider>
   <RouterProvider router={router} />
   </FirebaseProvider>
  </React.StrictMode>,
)
