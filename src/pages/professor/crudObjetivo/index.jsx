  
import React, { useEffect, useState } from 'react';
import {Card, Form, Button, Container, Table } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudObjetivos = () => {
    const [id, setId ] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        Listar();
    }, []);

    const Listar = () => {
        fetch(url + 'Objetivo')
            .then(response => response.json())
            .then(data => {
               console.log(data.data)
                setObjetivos(data.data);
                limparCampos();
        })
        .catch(err => console.error(err));
    }

    const Excluir = (event) => {
        event.preventDefault();
        console.log("remover" + event.target.value)
        fetch(`${url}objetivo/${event.target.value}`, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Baerer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Objetivo removido');

            Listar();
        })
    }


    const Editar = (event) => {
        event.preventDefault();

        fetch(`${url}objetivo/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            setId(dados.id);
            setDescricao(dados.descricao);
            setCategoria(dados.categoria);
        })
    }



    const Salvar = (event) => {
        event.preventDefault();

        const obj = {
            categoria : categoria,
            descricao : descricao,
        }

        let method = (id === "" ? 'POST' : 'PUT');
        let urlRequest = (id === "" ? `${url}objetivo` : `${url}objetivo/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(obj),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Objetivo salvo');

            Listar();
        })
        .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setId(0);
        setDescricao('');
    }


    return (
        <div>
            <Menu />
                <Container>
                    <h1 className='text-center'>CrudObjetivo</h1>
                    
                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => Salvar(event)}>
                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Uma breve descrição sobre o objetivo"></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Categoria</Form.Label>
                                    <Form.Control type="text" value={categoria} onChange={event => setCategoria(event.target.value)} placeholder="Categoria Oculta ou Normal">
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Button type="submit">Salvar</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Descricao</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            objetivos.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.descricao}</td>
                                    <td>{item.categoria}</td>
                                    <td><Button variant="warning" value={item.id} onClick={event => Editar(event)}>Editar</Button>
                                    
                                    <Button variant="danger" value={item.id} onClick={event => Excluir(event)} style={{ marginLeft : '40px'}}>Excluir</Button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Rodape />
        </div>      
    )
}

export default CrudObjetivos;