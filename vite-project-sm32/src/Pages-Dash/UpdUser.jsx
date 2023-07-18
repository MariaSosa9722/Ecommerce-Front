import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import {useParams,redirect} from 'react-router-dom'; //Obtiene el Id de la ruta


export default function UpdUser() {

    const params = useParams()
    // console.log('Este es un parametro '+ params.id)
    console.log(params)
    var PkUser = params.id;
    console.log(PkUser)

    const[User, SetUser]= useState({
        UserName: "",
        Password: ""
    })

    useEffect(()=>{

        const loadUser = async()=> {
            const response = await axios.get(`http://localhost:3000/users/${PkUser}`) 
            console.log(response);
            SetUser({
                UserName: response.data.UserName,
                Password:  response.data.Password
            })
        };
        loadUser(); //Ejecutar el método buscar usuario
    },[]);




    return (
        <>
            <NavDash />

            <Formik
                initialValues={User} //Una vez buscado los datos lo va mapear de forma automatica
                enableReinitialize= {true}
                onSubmit={async (values, actions) => {
                    console.log(values)

                   var res = await axios.put(`http://localhost:3000/users/${PkUser}`, values)
                    actions.resetForm()
                    // alert('Datos actualizados correctamente')
                    if(res.status ==200 )
                    {
                        //Redirecciomar 
                        window.location = '/IndexUser'; 
                  
                     
                    }
                    else
                    {
                        alert("Succedio un error")    
                    }

                  
               
              


                }}
            >
                {({ handleChange, handleSubmit, values }) => (

                    <div className='container mx-15 w-50  p-20'>
                        <h2 className="font-black text-3lx text-center">Editar usuario</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="UserName"
                                    onChange={handleChange}
                                    value={values.UserName} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" name="Password"
                                    onChange={handleChange}
                                    value={values.Password} />
                            </Form.Group>
                            <button type='onSubmit' className='btn btn-success'>Guardar</button>
                        </Form>

                    </div>

                )}
            </Formik>

        </>
    )
}
