import React, {useState, event} from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Jumbotron, ListGroup, Card, Button, Col, Row, FormGroup, FormFile } from 'react-bootstrap'
import './index.css'


const Turma = () => {
    const [urlImagem, setUrlImagem] = useState(''); 
    const [objetivoaluno, setobjetivoaluno] = useState([]); 

    const uploadFile = () => {
        event.preventDefault();
    }

    return (
        <div>
            <Menu />

            <div className='Superior'>
                <Container fluid className='Width'>

                    <Row md={3}>
                        <Col className='colunaesquerda' >
                            <div className='esquerda'>
                                <Jumbotron fluid>
                                    <Container className='Enquadramento'>
                                        <h1>Desenvolvimento de Sistemas</h1>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic dolores provident consectetur at ab ipsa expedita molestiae a nemo iusto consequuntur minima sed iure, voluptate dolorum saepe magnam veritatis cupiditate?
                                    </p>
                                    </Container>
                                </Jumbotron>
                            </div>

                            <div className='objetivosconcluidos'>
                                <h3>
                                   Objetivos Normais
                                </h3>
                                <Card>
                                    <Card.Header>Objetivos</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>

                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>Objetivos</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                            </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>



                        <Col sm='auto' xs={6}>
                            <div>
                                <div className='Raking'>
                                    <ListGroup>
                                        <h2>Ranking Dos Alunos</h2>
                                        <ListGroup.Item action variant="warning">Robert John Downey, Jr.</ListGroup.Item>
                                        <ListGroup.Item action variant="secondary">Scarlett Ingrid Johansson</ListGroup.Item>
                                        <ListGroup.Item action variant="danger">Benedict Timothy Carlton Cumberbatch</ListGroup.Item>
                                    </ListGroup>
                                </div>

                                <div className='objetivosocultos'>
                                    <h3>
                                      Objetivos Ocultos
                                </h3>
                                    <Card>
                                        <Card.Header>Objetivos</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Special title treatment</Card.Title>
                                            <Card.Text>
                                                With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </Col>



                        <Col>
                            <div className='Lateral'>
                                <h1>
                                    Objetivos Pendentes
                                </h1>

                                <Card>
                                    <Card.Header as="h5">Objetivo</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Demonstrar bom raciocinio logico</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit, 
                                        </Card.Text>
                                        <Button variant="primary">Formulario</Button>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header as="h5">Objetivo Pendentes</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Demonstrar bom raciocinio logico</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit,
                                        </Card.Text>
                                        <Button variant="primary">Formulario</Button>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Header as="h5">Objetivo Pendentes</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Demonstrar bom raciocinio logico</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus impedit, 
                                        </Card.Text>
                                        <Button variant="primary">Formulario</Button>
                                    </Card.Body>
                                </Card>
                                <FormGroup>
                                    <FormFile id="fileObjetivoAluno" label="Objetivo do Aluno Concluido" onChange={event => {uploadFile(event)}} />
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Rodape />
        </div>
    )
}
export default Turma;