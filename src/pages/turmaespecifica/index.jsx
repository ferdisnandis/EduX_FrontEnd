import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Jumbotron, ListGroup, Card, Button, Col, Row, Form, } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import './index.css'
import { url } from '../../utils/constant'


const Turma = () => {
    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [idcategoria, setIdCategoria] = useState('0');
    const [urlImagem, setUrlImagem] = useState('');
    const [realizado, setRealizado] = useState([]);
    const [pendente, setPendente] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        listarRealizado()
        listarPendente()
    }, [])

    const listarRealizado = () => {
        fetch(url + '/objetivoaluno/ListarObjetivosPorAluno/00C077ED-0EB2-4B16-A928-4EAEAB05BBF1/false')
            .then(response => response.json())
            .then(data => {
                setRealizado(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }
    const listarPendente = () => {
        fetch(url + '/objetivoaluno/ListarObjetivosPorAluno/00C077ED-0EB2-4B16-A928-4EAEAB05BBF1/true')
            .then(response => response.json())
            .then(data => {
                setPendente(data)
                console.log(data);
            })
            .catch(err => console.error(err));
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
                                    Objetivos Completos
                                </h3>
                                {
                                    realizado.map((item, index) => {
                                        return (
                                            <Card style={{ height: '140px' }}>
                                                <Card.Header>Objetivos</Card.Header>
                                                <Card.Body style={{ backgroundColor: '#00d65f' }}>
                                                    <Card.Title>
                                                        <p style={{ fontSize: '20px', marginTop: '-10px' }}>Sprint 2</p>
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <p>{item.objetivo.descricao}</p>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })
                                }
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
                                {
                                    pendente.map((item, index) => {
                                        return (
                                            <Card>
                                                <Card.Header>Objetivos</Card.Header>
                                                <Card.Body style={{ backgroundColor: '#f9e800' }}>
                                                    <Card.Title>
                                                        {item.objetivo.categoria.tipo}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {item.objetivo.descricao}
                                                    </Card.Text>
                                                    <Button variant="primary" onClick={handleShow} >Formulário</Button>
                                                </Card.Body>
                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                    size="lg"
                                                    aria-labelledby="contained-modal-title-vcenter"
                                                    centered
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <input type="hidden" id={'idObjetivoAluno'} value={item.id} />
                                                        <Form>
                                                            <Form.Group>
                                                                <Form.File id="exampleFormControlFile1" label="Example file input" />
                                                            </Form.Group>
                                                        </Form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Card>
                                        )
                                    })
                                }
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