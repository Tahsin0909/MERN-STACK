import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Components/Banner.jsx/Banner';
import Home from './Components/Home/Home';
import Award from './Components/Award/Award';
import AddProduct from './Components/Admin/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Banner></Banner>
      },
      {
        path:'/award',
        element:<Award></Award>
      },
      {
        path:'/addProduct',
        element:<AddProduct></AddProduct>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
