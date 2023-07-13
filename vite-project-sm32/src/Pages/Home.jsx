import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer'
import Header from '../components/Header'

import axios from 'axios';



function Home() {

    const [Users, setCatalogs] = useState([]);

    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchUsers();
      }, []);
    
      const fetchUsers = async () => {
       
          const response = await axios.get('http://localhost:3000/users'); // Ruta de la API para obtener catálogos
      
        
          console.log(response.data);
       
      }
    
    return (
        <>  
        <Header></Header>
        <div className=' md:w-1/3 lg:w-2/ 1   container'>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae consectetur illo ipsam repellendus voluptate error natus, earum est rerum eligendi repudiandae reprehenderit soluta totam aperiam unde possimus esse nulla perspiciatis!</h1>
            </div>
            <Footer></Footer>

        </>
    )
}

export default Home
