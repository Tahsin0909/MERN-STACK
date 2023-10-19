import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Award from './Components/Award/Award';
import AddProduct from './Components/Admin/AddProduct';

import MainHome from './MainHome/MainHome';
import AllProduct from './Components/AllProduct.jsx/AllProduct';
import Car from './Components/SingleCar/Car';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>
      }
      ,
      {
        path: '/award',
        element: <Award></Award>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      }
      ,
      {
        path: '/update',
        loader: () => fetch('http://localhost:5000/product'),
        element: <AllProduct></AllProduct>
      }
      ,
      {
        path: '/product/:id',
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <Car></Car>
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
