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
        element:<CardInfo></CardInfo>,
        loader: () => fetch('/data.json')
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
