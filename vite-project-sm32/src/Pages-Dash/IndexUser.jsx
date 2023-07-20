import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import { useNavigate } from 'react-router-dom'; //Servira para editar y busque por Id

function IndexUser() {
        
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        // Lógica para obtener los usuarios de la base de datos al cargar el componente
        fetchUsers();
    }, []);

    const fetchUsers = async () => {

        const response = await axios.get('http://localhost:3000/users'); // Ruta de la API para obtener usuarios
        setUsers(response.data);//Metiendo la respuesta(data) al estado 
        console.log('DAtos response ')
        console.log(response.data);
    }


// __________________________________________________
        // Funcion eliminar
// __________________________________________________

    const HandeDelte = async (id) => {

        const response = await axios.delete(`http://localhost:3000/users/${id}` );

        if(response.status == 200){
                alert("Se borro correctamente")
        }else{
            alert("Succedio un error")
        }
        fetchUsers()
    }

// --------------------------------------------------------
        //   Redireccionar mediante Id
        const navigate = useNavigate()

    return (
        <>
            <NavDash />
            <div className="container mx-20 w-50  p-20">
          
                <div className="row">
                   
                    <div className="offset-10 col-5 mb-5">

                        <a className="btn btn-success" href='/AddUser'> <i class="fa-solid fa-user" ></i>Nuevo</a>
                    </div>
                </div>
                <div className="offset-2 col-11 mb-5">
                    <div className="card border">
                        <div class="card-header bg-dark">
                            <h1 className="text-white"><strong>Lista de usuarios</strong></h1>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="tblArticulo" width="100%">
                                    <thead>
                                        <tr>
                                            <th> Nombre</th>
                                            <th> Contraseña</th>
                                            <th> Fecha de registro </th>
                                            <th> Acciones</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                            {Users.map((users) => (
                                                <tr key={users.PkUser}>
                                                    <td>{users.UserName} </td>
                                                    <td> {users.Password}  </td>
                                                    <td>  {users.Create} </td>


                                                    <td>
                                                        <a className=" btn btn-warning mr-auto" onClick={()=> navigate(`/EditUser/${users.PkUser}`)}> Editar</a>
                                                        {" "}
                                                        {/* <a class=" btn btn-danger mr-auto" onClick={() => console.log(users.PkUser)} > Eliminar</a> */}
                                                        <a className=" btn btn-danger mr-auto" onClick={() => HandeDelte(users.PkUser)} > Eliminar</a>
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default IndexUser
