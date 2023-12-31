import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './Components/Footer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Formulario from './Pages/Formulario'
import IndexUser from './Pages-Dash/IndexUser'
import AddUser from './Pages-Dash/AddUser'
import UpdUser from './Pages-Dash/UpdUser'
import DetalleComp from './Pages/DetalleComp'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Formulario",
      element: <Formulario/>
    },
    {
      path: "/IndexUser",
      element: <IndexUser/>
    },
    {
      path: "/AddUser",
      element : <AddUser/>

    },
    {
      path: "/EditUser/:id",
      element : <UpdUser/>

    },
    {
      path: "/detalleCompra",
      element : <DetalleComp/>

    }




    
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
