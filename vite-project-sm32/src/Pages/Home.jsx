import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../components/Header'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'



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


    // _______________________________________________________________________
    //  CONFIGURACION PARA LA OPCION DE MERCADO PAGO
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-27d170a2-53f5-4aca-b386-b24e3aeeda84'); //Poner la llaver PUBLIC_KEY


    // se realizara una peticion a la api que se creo de mercado pago
    const createPreference = async (titledata, price) => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                title: titledata,
                unit_price: price,
                // currency_id: "MXN"
            });
            console.log(response)
            const { id } = response.data;
            console.log(id)
            return id;
        } catch (error) {
            console.log(error)
        }


    }

    // de acuerdo a la respuesta que se obtiene como respuesta se almacena 
    const handleBuy = async (titledata, price) => {
        const id = await createPreference(titledata, price);
        if (id) {
          
            setPreferenceId(id);
        }
    }

    return (
        <>
            <Header></Header>
            <div className=' md:w-1/3 lg:w-2/ 1   container bg-clip-padding'>



                <div class="container">
                    <div className="row float-right">





                        {Productos.map((productos) => (
                            <div className="col-4 mt-6">
                                <div className="card" >

                                    <div className="card-body">

                                        <h2 className='font-bold text-lg'>{productos.Name}</h2>
                                        <p className="card-text">  {productos.Description} </p>
                                        <p className="card-text"> $ {productos.Price} MXN </p>
                                        <br />
                                        <button onClick={()=>handleBuy(productos.Name, productos.Price)} className="btn btn-success">Go </button>
                                        {

                                            preferenceId && <Wallet initialization={{ preferenceId }} />

                                        }

                                    </div>

                                </div>



                            </div>
                        ))}

                    </div>
                </div>
            </div >
            <Footer></Footer>

        </>
    )
}

export default Home
