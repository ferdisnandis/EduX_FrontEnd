import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
// import jwt_decode from "jwt-decode";
import { Container, Jumbotron, ListGroup, Card, Button, Col, Row, Form, } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import './index.css'
import { url } from '../../utils/constant'



const Turma = () => {
    const [urlImagem, setUrlImagem] = useState('');
    // const [objetivo, setObjetivo] = useState([])
    const [realizado, setRealizado] = useState([]);
    const [pendente, setPendente] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [arquivo, setArquivo] = useState('');
    const [idAlunoTurma, setIdAlunoTurma] = useState('');


    useEffect(() => {
        getAlunoTurmaByEmail()
        // listarRealizado()
        // listarPendente()
        // listar()
    }, [])

    // const listar = () => {
    //     fetch(url + '/objetivoaluno')
    //         .then(response => response.json())
    //         .then(data => {
    //             setObjetivo(data.data)
    //             console.log(data.data);
    //         })
    //         .catch(err => console.error(err));
    // }

    
    const getAlunoTurmaByEmail = () => { 
        let email = localStorage.getItem('email')
        console.log(email);
        fetch(url + `/alunoturma/GetByEmail/${email}`)
        .then(response => response.json())
        .then(data => {
            listarPendente(data.id)
            listarRealizado(data.id)
        })
    }

    const listarRealizado = (id) => {
        fetch(url + '/objetivoaluno/ListarObjetivosPorAluno/'+ id + '/false')
            .then(response => response.json())
            .then(data => {
                setRealizado(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }
    const listarPendente = (id) => {
        fetch(url + '/objetivoaluno/ListarObjetivosPorAluno/' + id + '/true')
            .then(response => response.json())
            .then(data => {
                setPendente(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    const keepFile = (event) => {
        setArquivo(event.target.files[0]);

    }

    const uploadFile = (event, id) => {
        event.preventDefault()

        let formdata = new FormData();

        formdata.append('objetivoAluno.Imagem', arquivo);
        console.log(event.id);
        fetch(url + '/objetivoAluno/' + id, {
            method: 'PUT',
            body: formdata
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // setUrlImagem(data.url)
            })
            .catch(err => console.log(err))
        window.location.reload();
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
                                            <Card>
                                                <Card.Header>Objetivos</Card.Header>
                                                <Card.Body style={{ backgroundColor: '#00d65f' }}>
                                                    <Card.Text>
                                                        <p style={{ fontStyle: 'italic', fontSize: '20px' }}>{item.objetivo.descricao}</p>
                                                    </Card.Text>
                                                    <img style={{ height: '70px', width: '70px' }} src={item.urlImagem} alt="Upload" />
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

                                <div className='Lateral'>
                                    <h3>
                                        Objetivos Pendentes
                                    </h3>
                                    {
                                        pendente.map((item, event) => {
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
                                                            <Form>
                                                                <Form.Group>
                                                                    <Form.File id="exampleFormControlFile1" label="Imagem da Atividade" onChange={event => { keepFile(event) }} />
                                                                    {urlImagem && <img src={urlImagem} style={{ width: '120px' }} />}
                                                                </Form.Group>
                                                            </Form>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                                                            {/* <Button variant="primary" value={item.id} onClick={event => editar(event)}>Enviar</Button> */}
                                                            <Button type='submit' onClick={event => { uploadFile(event, item.id) }}>Enviar</Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </Card>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </Col>



                        <Col>
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
                        </Col>
                    </Row>
                </Container>
            </div>
            <Rodape />
        </div>
    )
}
export default Turma;