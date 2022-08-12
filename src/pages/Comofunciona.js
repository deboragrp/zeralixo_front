import React from "react";
import Navbar from "../components/navbar";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import horta from "../images/horta.jpg"
import zeralixo from "../images/zeralixo.jpeg"
import composteira from "../images/composteira.png"

function Comofunciona() {
  return (
    <div>
      <Navbar/>
      <Row xs={1} md={2} className="g-4">

      <>
      {[
        'Success',
       
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem',height:"25rem", marginLeft:"10rem", marginTop:"10rem",  marginTop:"5rem" }}
          className="md-2"
        >      
          <Card.Img variant="top" src={horta} style={{width:"18rem", height:"9rem"}}/>
          <Card.Header className="text-center">Horta</Card.Header>
          <Card.Body>
            <Card.Title>Montagem da Horta </Card.Title>
            <Card.Text>
             Após contratar o serviço, a equipe do Zera Lixo irá ao condomínio
             para montar toda a estrutura da horta.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
    <>
      {[
     
        'Info',
        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem',height:"25rem", marginLeft:"5rem", marginTop:"5rem"  }}
          className="md-2"
        >
          <Card.Img variant="top" src={composteira} style={{width:"18rem", height:"9rem"}}/>
          <Card.Header className="text-center">Composteira e Minhocario</Card.Header>
          <Card.Body>
            <Card.Title> Disponibilização </Card.Title>
            <Card.Text>
              A Zera Lixo também disponibilinazará as composteiras e os minhocários, sendo que eles
              serão totalmente mantidos e cuidados pelo proprio condomínio.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>  
    <>
      {[
      
        'Danger'
        
       
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem',height:"25rem",  marginLeft:"5rem", marginTop:"5rem" }}
          className="md-6"
        >          
          <Card.Img variant="top" src={zeralixo} style={{width:"18rem"}}/>
          <Card.Header className="text-center"  >Zera Lixo</Card.Header>
          <Card.Body>
            <Card.Title> Plataforma Zera Lixo </Card.Title>
            <Card.Text>
              O condomínio terá acesso a plataforma do Zera Lixo, assim
              seus moradores teram acesso aos seus perfis onde eles iram realizar as 
              Tasks referentes a Horta.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
    
    
    </Row>
      
    </div>
  );
}
export default Comofunciona;
