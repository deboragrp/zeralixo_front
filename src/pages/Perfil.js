import React from "react";
import Navbar2 from "../components/navbar2";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Perfil() {
  const [task, setTask] = React.useState();
  const [allTasks, setAllTasks] = React.useState([]);

  function clickbutton() {
    setAllTasks(task);
  }
  function textOnTextArea(eventTextArea) {
    setTask(eventTextArea.target.value);
  }
  return (
    <div>
      <Navbar2 />
      <Container className="py-5">
        <Row>
          <Col className="col-lg-4  ">
            <Card className="text-center mb-5 border  border-success border-4">
              <Card.Img
                src="https://blush.design/api/download?shareUri=JRQupTxfYcCI9sSm&c=Backdrop_0%7E9fe1c4_Hair_0%7Ec93305_Skin_0%7E57331f_Top_0%7E86e65f&bg=ffffff&w=800&h=800&fm=png"
                alt="avatar"
                class="rounded-circle img-fluid"
                style={{ width: "150px", marginLeft: "28%" }}
              />
              <h5 class="my-2 fw-bold">Maria da Silva</h5>
              <p class="text-success mb-3  fw-bold">20 Pontos</p>
              <div class="d-flex justify-content-center mb-2">
                <button type="button" class="btn btn-outline-success ms-1 mb-3">
                  Editar perfil
                </button>
              </div>
            </Card>
          </Col>
          <Col className="col-lg-8">
            <Card className="mb-4 border  border-success border-4">
              <h4 class="text-center my-3 pb-3">TASKS</h4>

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
                  >
                    Salvar
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
            <Row>
              <Col className="col-lg-12">
                <Card className="  mb-4 border  border-success border-4">
                  <h4 class="text-center mt-4 mb-4">Troca de Pontos</h4>

                  <CardGroup>
                    <Card className="  border  border-success border-3">
                      <Card.Body>
                        <Card.Title className="text-success fw-bold">
                          15pts
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src="https://www.quitandatomio.com.br/upload/1284382069-13-beneficios-da-cebolinha-para-que-serve-e-propriedades.jpg"
                        />
                      </Card.Body>
                    </Card>

                    <Card className="  border  border-success border-3">
                      <Card.Body>
                        <Card.Title className="text-success fw-bold">
                          15pts
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src="https://media.istockphoto.com/photos/cilantro-picture-id184908546?k=20&m=184908546&s=612x612&w=0&h=JA4BtgVbC9r5XMvKitB0jzgLzueF_C3fM1BpXGaJuqQ="
                        />
                      </Card.Body>
                    </Card>

                    <Card className="  border  border-success border-3">
                      <Card.Body>
                        <Card.Title className="text-success fw-bold">
                          20pts
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRhWwZ9-1J3p2Rc4IvyO8Cwl3S-2RgMm8bA&usqp=CAU"
                        />
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Perfil;
