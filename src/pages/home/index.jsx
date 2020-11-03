
import React from 'react';
import { Carousel, Jumbotron, Button , Col, Row, Container, Card} from 'react-bootstrap';
import Menu from '../../components/menu/'
import Rodape from '../../components/rodape/'

const Home = () => {
    <link rel="stylesheet" href="css/style.css" type="text/css"></link>
    return (
    <div>
        <Menu />
        <Carousel>
            <Carousel.Item>
               <div className="border">
               <img
                className="d-block w-100"
                src="https://assets.st-note.com/production/uploads/images/29773136/rectangle_large_type_2_6136114741dd83dac3dbb0697374024b.jpg"
                alt="First slide"
                />

               </div>
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
            </Carousel.Item>
        </Carousel>
        <Rodape />
    </div>
    )
}
export default Home;