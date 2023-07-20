import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../components/Header'

import axios from 'axios';



function Home() {

    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchProductos();
    }, []);

    const fetchProductos = async () => {

        const response = await axios.get('http://localhost:3000/producto'); // Ruta de la API para obtener catálogos
        setProductos(response.data)

        console.log(response.data);

    }

    return (
        <>
            <Header></Header>
            <div className=' md:w-1/3 lg:w-2/ 1   container bg-clip-padding'>
               

            </div>

            <div class="container">
                <div className="row float-right">

                    {Productos.map((productos) => (
                        <div className="col-4 mt-6">




                            <div className="card" >

                                <div className="card-body">

                                    <h2 className='font-bold text-lg'>{productos.Name}</h2>
                                    <p className="card-text">  {productos.Description} </p>
                                    <p className="card-text"> $ {productos.Price} MXN </p>
                                    <br/>
                                    <a href="#" className="btn btn-success">Go somewhere</a>

                                </div>

                            </div>



                        </div>
                    ))}

          
                </div>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Home
