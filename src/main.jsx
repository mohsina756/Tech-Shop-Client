import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddBrand from './components/AddBrand.jsx'
import UpdateBrand from './components/UpdateBrand.jsx' ;
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('https://promotion-dept-server.vercel.app/brand'),
      },
      {
        path: "/addBrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: "/updateBrand",
        element: <UpdateBrand></UpdateBrand>,
      },
      {
        path: "/brand/:brand",
        element: <Products></Products>,
        loader: ({params})=>fetch(`https://promotion-dept-server.vercel.app/brand/${params.brand}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

     <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
