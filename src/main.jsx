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
import CarByBrands from './Components/CarByBrands/CarByBrands';
import Update from './Components/Update/Update';
import SignUp from './Components/SignUp/SignUp';
import { ContextApi } from './Components/ContextApi/ContextApi';
import SignIn from './Components/SignIn/SignIn';
import Carts from './Components/Cart/Carts';
import AboutUs from './Components/AboutUS/AboutUs';
import News from './Components/News/News';
import PrivetRoutes from './Components/PvtRoute/PvtRoute';

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
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      }
      ,
      {
        path: '/action',
        loader: () => fetch('http://localhost:5000/product'),
        element: <PrivetRoutes><AllProduct></AllProduct></PrivetRoutes>
      }
      ,
      {
        path: '/news',
        element: <News></News>
      }
      ,
      {
        path: '/product/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <PrivetRoutes><Car></Car></PrivetRoutes>
      }
      ,
      {
        path: '/:brand',
        loader: () => fetch('http://localhost:5000/product'),
        element: <CarByBrands></CarByBrands>
      }
      ,
      {
        path: '/update/:id',
        loader: ( {params} ) => fetch(`http://localhost:5000/product/${params.id}`),
        element: <PrivetRoutes><Update></Update></PrivetRoutes>
      }
      ,
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
      ,
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }
      ,
      {
        path: '/myCart/:id',
        loader: ({params}) => fetch(`http://localhost:5000/myCart/${params}`),
        element: <PrivetRoutes><Carts></Carts></PrivetRoutes>
      }

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>,
)
