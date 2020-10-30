import React from "react";
import {Carousel, Jumbotron, Button, Row, Col, Grid} from 'react-bootstrap';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'

const Home = () => {
    return (
    <div>
        <Menu />
            <Carousel>
                <Carousel.Item>
                    <img 
                    className="d-block w-180"
                    src="https://assets.st-note.com/production/uploads/images/29773136/rectangle_large_type_2_6136114741dd83dac3dbb0697374024b.jpg"
                    alt="First slide"
                    style={{width : '100%'}}
                    />
                </Carousel.Item>
            </Carousel>

            <Jumbotron className="text-center">
                <h1>Bem vindo a EduX</h1>
                <p>
                    Uma nova maneira de estudar!
                </p>
                <p>
                    <Button variant="primary" href='/login'>Login</Button><Button variant="success" href='/cadastrar'>Cadastrar</Button>
                </p>
            </Jumbotron>
            <Grid>
                <Row>
                <Col>
                COLUNA 1
                </Col>
                </Row>
            </Grid>
        <Rodape />
    </div>
    )
}

export default Home;