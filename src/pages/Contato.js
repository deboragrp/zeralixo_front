import React from "react";
import Navbar from "../components/navbar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

function Contato() {
  return (
    <div>
         <Navbar />
      <form className="form-signin w-50 mt-5  m-auto pt-5 pb-5">
        <h2 className=" mb-10 text-center">FALE CONOSCO</h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Nome completo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="E-mail" />
          </Form.Group>
        </Row>

        <Row className="mb-3"> 
        
        <Form.Group as={Col}>
            <Form.Label>Contato</Form.Label>
            <Form.Control type="tel" placeholder="Contato" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Assunto</Form.Label>
            <Form.Control type="text" placeholder="Assunto" />
          </Form.Group>

         
        </Row>
    
        <Form.Group className="mb-3" controlId="formGridAddress1" >
          <Form.Label>Mensagem</Form.Label>
          <Form.Control placeholder=" " />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">Enviar</Button>
        </div>

      </form>
    </div>
  );
}
export default Contato;
