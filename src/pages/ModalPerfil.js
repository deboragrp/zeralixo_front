<<<<<<< HEAD
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function ModalPerfil(props) {
  const handleClose = () => setShow(false);
  const [setShow] = useState(false);
=======
import React,  { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";

function ModalPerfil(props) {

    const handleClose = () => setShow(false);
    const [setShow] = useState(false);
>>>>>>> 3f48419afc52d38740bfb0206c772a3a3206b3e0

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
<<<<<<< HEAD
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Perfil
        </Modal.Title>
=======
        <Modal.Title id="contained-modal-title-vcenter">Editar Perfil</Modal.Title>
>>>>>>> 3f48419afc52d38740bfb0206c772a3a3206b3e0
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
<<<<<<< HEAD
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Nome completo" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="e-mail" placeholder="Enter e-mail" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="ID do seu condomínio"
              />
            </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Função</Form.Label>
=======
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Nome completo" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="e-mail" placeholder="Enter e-mail" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="ID do seu condomínio" />
          </Form.Group>
          </Row>

          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Função</Form.Label>
>>>>>>> 3f48419afc52d38740bfb0206c772a3a3206b3e0
            <Form.Select defaultValue="Escolha...">
              <option>Escolha...</option>
              <option>Regar</option>
              <option>Colher</option>
              <option>Limpar</option>
              <option>Plantar</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
<<<<<<< HEAD
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Seu andar</Form.Label>
              <Form.Control type="number" placeholder="Escolha seu andar" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nº do apt</Form.Label>
              <Form.Control type="number" placeholder="Número do seu apt" />
            </Form.Group>
          </Row>
=======
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Seu andar</Form.Label>
            <Form.Control type="number" placeholder="Escolha seu andar" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nº do apt</Form.Label>
            <Form.Control type="number" placeholder="Número do seu apt" />
          </Form.Group>
          </Row>

>>>>>>> 3f48419afc52d38740bfb0206c772a3a3206b3e0
        </Container>
      </Modal.Body>

      <Modal.Footer>
<<<<<<< HEAD
        <Button variant="success" onClick={handleClose}>
          Salvar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPerfil;
=======
          <Button variant="primary" onClick={handleClose}>
           Salvar          
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
    </Modal>
    
  );
}

export default ModalPerfil
>>>>>>> 3f48419afc52d38740bfb0206c772a3a3206b3e0
