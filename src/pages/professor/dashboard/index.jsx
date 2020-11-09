import React, { useEffect, useState } from 'react';
import {Card, Form, Button, Container, Table } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const Dashboard = () => {
    const [id, setId ] = useState(0);
    const [nota, setNota] = useState('');
    const [turma, setTurma] = useState('');
    const [objetivos, setObjetivos] = useState('');
    const [objetivosAluno, setObjetivosAluno] = useState([]);

    useEffect(() => {
        Listar();
    }, []);

    const Listar = () => {
        fetch(url + '/avaliacao')
            .then(response => response.json())
            .then(data => {
                setObjetivosAluno(data.data);
                console.log(data.data);
                limparCampos();
        })
        .catch(err => console.error(err));
    }

    //const Excluir = (event) => {
    //    event.preventDefault();

    //    fetch(`${url}/dashboard/${event.target.value}`,{
    //        method : 'DELETE',
    //        headers : {
    //            'authorization' : 'Baerer ' + localStorage.getItem('token-edux')
    //        }
    //    })
    //    .then(response => response.json())
    //    .then(dados => {
    //        alert('Objetivo Aluno removido');

   //         Listar();
   //     })
   // }


    const Editar = (event) => {
        event.preventDefault();

        fetch(`${url}/professor/avaliacao/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            setNota(dados.nota);
        })
    }

    //const keepFile = (event) => {
    //    setImagem(event.target.files[0]);
    //}

    //const uploadFile = (event) => {
    //    event.preventDefault();

    //    let formdata = new FormData();

    //    formdata.append('objetivo.Imagem', event.target.files[0]);

    //    fetch(`${url}'/objetivo/${event.target.value}`,{
    //        method : 'POST',
    //        body : formdata
    //    })
    //    .then(response => response.json())
    //    .then(data => {
    //        console.log(data)
            //setUrlImagem(data.url);
    //    })
    //    .catch(err => console.log(err))
    //    window.location.reload();
    //}

    const Salvar = (event) => {
        event.preventDefault();

        const objAluno = {
            nota : nota,
            objetivos : objetivos,
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}/professor/avaliacao` : `${url}/professor/avaliacao/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(objAluno),
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
        setNota('');
        setObjetivos('');
    }


    return (
        <div>
            <Menu />
                <Container>
                    <h1 className='text-center'>Avaliação</h1>
                    
                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => Salvar(event)}>
                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Objetivo</Form.Label>
                                    <Form.Control type="text" value={objetivos} onChange={event => setObjetivos(event.target.value)} placeholder="Objetivo enviado"></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicNota">
                                    <Form.Label>Nota</Form.Label>
                                    <Form.Control type="number" value={nota} onChange={event => setNota(event.target.value)} placeholder="Defina a nota do objetivo"></Form.Control>
                                    <Button type="submit">Salvar</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Objetivo</th>
                            <th>Turma</th>
                            <th>Aluno</th>
                            <th>Nota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            objetivosAluno.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.Objetivos}</td>
                                    <td>{item.Turma}</td>
                                    <td>{item.aluno}</td>
                                    <td>{item.nota}</td>
                                    <td><Button variant="warning" value={item.id} onClick={event => Editar(event)}>Editar</Button></td>
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

export default Dashboard;