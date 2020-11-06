import React from 'react';
import { Carousel, Jumbotron, Button , Col, Row, Container, Card } from 'react-bootstrap';
import Menu from '../../components/menu/'
import Rodape from '../../components/rodape/'
import './../home/index.css';


const Home = () => {
    return (
    <div>
        <Menu />
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/vector-illustration-people-learning-repair-machines-trade-school-vocational-university-college-institution-vocational-education_4968-650.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Bem Vindo a EduX</h3>
      <p>Plataforma Educacional para melhorar seus estudos</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/coding-create-artificial-intelligence-program-looking-bug-artificial-brain-robot-smart-technology-artificial-intelligence-internet-things_4968-705.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-vector/time-management-work-multitasking-managing-time-security-scheduling_4968-683.jpg"
      alt="four slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Jumbotron className="text-center">
            <h1>Bem vindo a EduX</h1>
                <p>
                    Uma nova maneira de estudar!
                </p>
                <p>
                    <Button href='/login' >Login</Button> <Button style={{ background : '#00c2ee'}} variant="primary" href='/cadastrar'>Cadastrar</Button>
                </p>
        </Jumbotron>
        <Container>
        <Row>

            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/205462/isolated/lists/87b34912ed9f8d2900754c38220faac6-pilha-de-ilustracao-de-livros.png" />
                <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.colegiosantoantonio.com.br/wp-content/uploads/2019/12/livro-escola.png" />
                <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.vexels.com/media/users/3/153171/isolated/preview/476aababf06d3a715e4e380b34764dc3---cone-de-escola-de-chap--u-de-formatura-by-vexels.png" />
                <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                </Card.Body>
            </Card>
            </Col>

        </Row>
        </Container>
        <Rodape />
    </div>
    )
}
export default Home;