
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavDash from './NavDash'
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';

function AddUser() {
  return (
    <>
      <NavDash />
      <Formik
        initialValues={{
          UserName: "",
          Password: ""

        }}
        // VER LOS VALORES QUE AGREGA EL USUARIO
        onSubmit={async(values, actions) => { 
            console.log(values)
            
            var res =await axios.post('http://localhost:3000/users', values)
        

              actions.resetForm()
              alert('Datos agregados correctamente')
              window.location = '/IndexUser'; 

              

          
          
             
        }}
        >
        {({handleChange, handleSubmit, values}) => (

          <div className='container mx-15 w-50  p-20'>
            <h2 className="font-black text-3lx text-center">Agregar nuevo usuario</h2>
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
                value={values.Password}/>
              </Form.Group>
              <button type='onSubmit' className='btn btn-success'>Guardar</button>
            </Form>

          </div>

        )}
      </Formik>

    </>
  )
}

export default AddUser
