  
import React, { useEffect, useState} from 'react';
import {Card, Form, Button, Container, Table } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudObjetivos = () => {
    const [id, setId ] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState('');
    const [UrlImagem, setUrlImagem] = useState('');
    const [objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        Listar();
    }, []);

    const Listar = () => {
        fetch(url + '/objetivo')
            .then(response => response.json())
            .then(data => {
                setObjetivos(data.data);
                console.log(data.data);
                limparCampos();
        })
        .catch(err => console.error(err));
    }

    const Excluir = (event) => {
        event.preventDefault();

        fetch(`${url}/objetivo/${event.target.value}`,{
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

        fetch(`${url}/objetivo/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            setId(dados.id);
            setDescricao(dados.descricao);
            setImagem(dados.imagem)
            setUrlImagem(dados.urlImagem);
            setCategoria(dados.categoria);
        })
    }

    const keepFile = (event) => {
        setImagem(event.target.files[0]);
    }

    const uploadFile = (event) => {
        event.preventDefault();

        let formdata = new FormData();

        formdata.append('objetivo.Imagem', event.target.files[0]);

        fetch(`${url}'/objetivo/${event.target.value}`,{
            method : 'POST',
            body : formdata
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //setUrlImagem(data.url);
        })
        .catch(err => console.log(err))
        window.location.reload();
    }

    const Salvar = (event) => {
        event.preventDefault();

        const obj = {
            categoria : categoria,
            descricao : descricao,
            imagem : imagem,
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/objetivo` : `${url}/objetivo${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(obj),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
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
        setUrlImagem('');
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
                                    <Form.Control as="select">
                                        <option>Normal</option>
                                        <option>Oculto</option>
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