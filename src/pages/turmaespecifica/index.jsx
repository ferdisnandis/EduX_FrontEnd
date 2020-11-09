import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import './Index.css'
import { Container, Jumbotron, ListGroup, Card, Button, Col, Row, Form, } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { url } from '../../utils/constant'



const Turma = () => {
    const [urlImagem, setUrlImagem] = useState('');
    const [realizado, setRealizado] = useState([]);
    const [pendente, setPendente] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [arquivo, setArquivo] = useState('');
    const [ranking, setRanking] = useState([])

    useEffect(() => {
        getAlunoTurmaByEmail()
        getRanking()
    }, [])

    const getRanking = () => {
        fetch(url + 'objetivoaluno/ranking')
            .then(response => response.json())
            .then(data => {
                setRanking(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }

    const getAlunoTurmaByEmail = () => {
        let email = localStorage.getItem('email')
        console.log(email);
        fetch(url + 'alunoturma/GetByEmail/' + `${email}`)
            .then(response => response.json())
            .then(data => {
                listarPendente(data.id)
                listarRealizado(data.id)
            })
    }

    const listarRealizado = (id) => {
        fetch(url + 'objetivoaluno/ListarObjetivosPorAluno/' + id + '/false')
            .then(response => response.json())
            .then(data => {
                setRealizado(data)
                console.log(data);
            })
            .catch(err => console.error(err));
    }
    const listarPendente = (id) => {
        fetch(url + 'objetivoaluno/ListarObjetivosPorAluno/' + id + '/true')
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
        fetch(url + 'objetivoAluno/' + id, {
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
                                    <h2>Ranking Dos Alunos</h2>
                                    {
                                        ranking.map((item) => {
                                            return (
                                                <div>
                                                    <ListGroup>
                                                        <ListGroup.Item action variant="success">
                                                            <div className='display'>
                                                                <p className='nome'>{item.nome}</p>  
                                                                <p className='media'> Média: {item.media.toFixed(2)}</p>
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </div>
                                            )
                                        })
                                    }
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
                                                            <Modal.Title>Entrega da Atividade</Modal.Title>
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
                                <Card style={{ backgroundColor: 'gray' }}>
                                    <Card.Header>Objetivos</Card.Header>
                                    <Card.Body>
                                        <Card.Title>React-App</Card.Title>
                                        <Card.Text>
                                            Percebeu erros minunciosamente
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