import React from 'react';
import { Carousel, Jumbotron, Button, Col, Row, Container, Card } from 'react-bootstrap';
import Menu from '../../components/menu/'
import Rodape from '../../components/rodape/'
import './../home/index.css';


const Home = () => {
  return (
    <div>
      <Menu />
      <Carousel >
        <Carousel.Item style={{ height: '700px' }}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/vector-illustration-people-learning-repair-machines-trade-school-vocational-university-college-institution-vocational-education_4968-650.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '700px' }}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/coding-create-artificial-intelligence-program-looking-bug-artificial-brain-robot-smart-technology-artificial-intelligence-internet-things_4968-705.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: '700px' }}>
          <img
            className="d-block w-100"
            src="https://image.freepik.com/free-vector/time-management-work-multitasking-managing-time-security-scheduling_4968-683.jpg"
            alt="four slide"
          />
<<<<<<< HEAD
=======


>>>>>>> 6b846d5f559d157a2a0ff2ff28b0ef5df7d9c22e
        </Carousel.Item>
      </Carousel>
      <Jumbotron className="jumb">
        <h1 className='text-center'>Bem vindo a EduX</h1>
        <p className='text-center' >
          Uma nova maneira de estudar!
                </p>
        <p className='text-center'>
          <Button href='/login' >Login</Button> <Button variant="primary" href='/cadastrar'>Cadastrar</Button>
        </p>
      </Jumbotron>
      <Container>
        <Carousel>

        </Carousel>
        <Row className='row-yellow'>

          <Col className='Col1'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/67/13/81/6713813ffa60c09afb28013bea53020a.jpg" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                        </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className='Col2'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/59/c2/2b/59c22b728217ccb5dfe35e982acf28b9.jpg" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                        </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className='Col3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/d6/87/51/d687519afe3081e6e886d709ac2759f6.jpg" />
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