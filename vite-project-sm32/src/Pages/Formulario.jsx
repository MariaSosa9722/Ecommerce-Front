import React from 'react'
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import Header from '../components/Header';


function Formulario() {
  return (
    <>  
      <Header></Header>
     

      <div className=' md:w-1/3 lg:w-2/ 1 container'>
        <h2 className="font-black text-3lx text-center">Formulario</h2>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Formulario;
// rfce  ---> atajo estructura
