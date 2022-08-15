import Table from "react-bootstrap/Table";
import Navbar2 from "../components/navbar2";
import { Container } from "react-bootstrap";

function PerfilCad() {
  return (
    <div>
      <Navbar2 />
      <Container className="mt-5">
        <h1 className="fw-bold text-dark"> Lista de Moradores </h1>
        <Table className="mt-5" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>62f6a469e0625fcd553ff583</td>
              <td>Luisa Sonza</td>
              <td>luisa.sonza@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default PerfilCad;