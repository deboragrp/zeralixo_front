import React,  { useState } from "react";
import Navbar2 from "../components/navbar2";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Avatar from "../images/avatar.png"
import CardGroup from "react-bootstrap/CardGroup";
import ModalPerfil from "./ModalPerfil";
import tomate from "../images/tomate.jpg"
import coentro from "../images/coentro.jpg"
import cenoura from "../images/cenoura.png"
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';



function Perfil() {
  const [task, setTask] = React.useState();
  const [allTasks, setAllTasks] = React.useState([]);
  const [modalShow, setModalShow] = useState(false);

  function clickbutton() {
    setAllTasks(task);
  }
  function textOnTextArea(eventTextArea) {
    setTask(eventTextArea.target.value);
  }
  return (
    <div>
      <Navbar2 />

      {/* Card Perfil */}
      <Container className="py-5">
        <Row>
          <Col className="col-12  col-lg-4 ">
          <Card style={{ width: '18rem',height:"18rem", background: ' #F5F3F3' }}>
             <Card.Img
                src={Avatar}
                alt="avatar"
                class="rounded-circle img-fluid"
                style={{ width: "130px", marginLeft: "28%" }}
              />      
          <Card.Body>
          <Card.Title 
                style={{ marginLeft: "28%" }}>Maria da Silva</Card.Title>
        <Card.Text  style={{ marginLeft: "35%" }}>
                   <p>20 Pontos</p>
        </Card.Text>
                  <>
                <Button variant="primary" 
                        onClick={() => setModalShow(true)}                        
                        class="btn btn-outline-success"
                        style={{ marginLeft: "28%" }}
                        >Editar Perfil</Button>

                   <ModalPerfil show={modalShow} onHide={() => setModalShow(false)} />
                  </>
          </Card.Body>
        </Card><br></br>

                 {/* Card Status */}
        <Card className="text-center"   style={{ width: "18rem"}}>
                <Card.Header>Status</Card.Header>       
            </Card>
      <ListGroup as="ol" numbered style={{ width: "18rem"}}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Tarefas</div>
          Total de Tarefas         
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Abertas</div>
          Tarefas em andamento     
          </div>
        <Badge bg="primary" pill>
          3
        </Badge>
        </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Finalizadas</div>
            Total de tarefas finalizadas        
          </div>
        <Badge bg="primary" pill>
          9
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Canceladas</div>
           Total de tarefas canceladas        
          </div>
        <Badge bg="primary" pill>
          2
        </Badge>
      </ListGroup.Item>
    </ListGroup>
          </Col>

  
                  {/* Card Task */}
          <Col className="col-lg-8"   style={{}}>
            <Card className="text-center">
                <Card.Header>Task</Card.Header>       
            </Card>

            <Card className="mb-4 "
            style={{padding: "26px"}}>
              <form class="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <div class="col-12">
                  <div class="form-outline">
                    <input
                      onChange={textOnTextArea}
                      type="text"
                      id="form1"
                      class="form-control"
                      placeholder="Insira uma task"
                    />
                  </div>
                </div>

                <div class="col-12">
                  <button
                    onClick={clickbutton}
                    type="submit"
                    class="btn btn-primary fw-bold"
                  >Salvar
                  </button>
                </div>
              </form>

              <table class="table mb-4 ">
                <thead>
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Para fazer</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{allTasks}</td>
                    <td>Em progresso</td>
                    <td>
                      <button type="submit" class="btn btn-danger">
                        Delete
                      </button>

                      <button type="submit" class="btn btn-success ms-1">
                        Finalizado
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>


                 
                 {/* Card troca de pontos */}
            <Row>
            <Col className="col-lg-12">
                   
            <Card className="text-center">
                <Card.Header>Troca de Pontos</Card.Header>       
            </Card>

             <CardGroup>
             <Card>
               <Card.Img variant="top" src={tomate} style={{  width: "150px",  marginLeft: "18%", marginTop:"10%"}}/>
            <Card.Body>
             <Card.Title style={{ marginLeft: "30%"}}>Tomates</Card.Title>
             <Card.Text>
             O tomate é uma boa fonte de vitaminas A, C e do complexo B. 
             O mesmo também possui quantidades significativas de sais minerais, 
             como o Ferro, Potássio, Cálcio, entre outros.
             </Card.Text>
                      <button type="submit" class="btn btn-success" style={{ marginLeft: "32%"}} >
                        Trocar
                      </button>
            </Card.Body>
             </Card>

             <Card>
               <Card.Img variant="top" src={coentro} style={{   width: "140px",  marginLeft: "18%", marginTop:"4%"}}/>
             <Card.Body>
             <Card.Title style={{ marginLeft: "30%"}}>Coentro</Card.Title>
             <Card.Text>
             O coentro contém propriedades digestivas e anti-inflamatórias, 
             ajudando a combater a má digestão e a constipação. Tambem diminui a pressão arterial 
             e auxiliar no tratamento da diabetes.
             </Card.Text>
                      <button type="submit" class="btn btn-success " style={{ marginLeft: "32%"}}>
                        Trocar
                      </button>
             </Card.Body>
            </Card>
         
             <Card>
                <Card.Img variant="top" src={cenoura} style={{  width: "140px",  marginLeft: "18%", marginTop:"4%"}} />
         <Card.Body>
          <Card.Title style={{ marginLeft: "30%"}}>Cenoura</Card.Title>
          <Card.Text>
          A cenoura é rica em sais minerais, como ferro e cálcio, 
          vitaminas K, A, C, E e do complexo B.
          Por isso ela ajuda na saúde dos olhos, pele e até do cérebro, 
          além de ter influência positiva no colesterol.
          </Card.Text>
                      <button type="submit" class="btn btn-success" style={{ marginLeft: "32%"}}>
                        Trocar
                      </button>
        </Card.Body>
     
               </Card>
             </CardGroup>
            </Col>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Perfil;
