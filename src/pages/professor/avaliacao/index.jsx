import React, { useEffect, useState } from 'react';
import {Card, Form, Button, Container, Table } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const Dashboard = () => {
    //Objetivo Aluno
    const [id, setId ] = useState(0);
    const [idAlunoTurma, setIdAlunoTurma] = useState(0);
    const [idObjetivo, setIdObjetivo] = useState(0);
    const [nota, setNota] = useState('');
    const [alunoTurma, setAlunoTurma] = useState([]);
    const [objetivo, setObjetivo] = useState([]);
    const [objetivoAluno, setObjetivoAluno] = useState([]);

    useEffect(() => {
        ListarAlunoTurma();
        ListarObjetivo();
        ListarObjetivoAluno();
    }, []);

    const ListarObjetivoAluno = () => {
        fetch(url + 'objetivoAluno')
            .then(response => response.json())
            .then(data => {
                setObjetivoAluno(data.data);
                console.log(data.data);
                limparCampos();
        })
        .catch(err => console.error(err));
    }

    const ListarAlunoTurma = () => {
        fetch(url + 'AlunoTurma', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                setAlunoTurma(data.data);
             //   limparCampos();
            })
            .catch(err => console.error(err));
    }

    const ListarObjetivo = () => {
        fetch(url + 'Objetivo', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                setObjetivo(data.data);
             //   limparCampos();
            })
            .catch(err => console.error(err));
    }

    const Excluir = (event) => {
        event.preventDefault();

        fetch(url + 'objetivoAluno/' + event.target.value, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Baerer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Objetivo Aluno removido');

            ListarObjetivoAluno();
        })
    }


    const Editar = (event) => {
        event.preventDefault();

        fetch(url + 'objetivoAluno/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.id)
            setIdAlunoTurma(dado.idAlunoTurma)
            setIdObjetivo(dado.idObjetivo)
            setNota(dado.nota);
        })
    }

    const Salvar = (event) => {
        event.preventDefault();
        
        const objAluno = {
            nota : nota,
            idObjetivo : idObjetivo,
            idAlunoTurma : idAlunoTurma,
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}objetivoAluno` : `${url}objetivoAluno/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(objAluno),
            headers : {
                'content-type' : 'application/json',
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        
        .then(response => response.json())
        .then(dado => {
            alert('Objetivo salvo');
            
            ListarObjetivoAluno();
        })
    }

    const limparCampos = () => {
        setId(0);
        setNota('');
        setIdAlunoTurma(0);
        setIdObjetivo(0);
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
                                    <Form.Control as="select" value={idObjetivo} onChange={event => setIdObjetivo(event.target.value)} placeholder="Objetivo enviado">
                                    <option>Selecione um objetivo</option>
                                    {
                                        objetivo.map((item, index) => {
                                            return(
                                                <option key={index} value={item.id}>{item.descricao}</option>
                                            )
                                        })
                                    }
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicAlunoTurma">
                                    <Form.Label>Aluno</Form.Label>
                                    <Form.Control as="select" value={idAlunoTurma} onChange={event => setIdAlunoTurma(event.target.value)} placeholder="Selecione o Aluno">
                                    <option>Selecione um aluno</option>
                                    {
                                        alunoTurma.map((item, index) => {
                                            return(
                                                <option key={index} value={item.id}>{item.usuario.nome}</option>
                                            )
                                        })
                                    }
                                    </Form.Control>
                                </Form.Group>

                                
                                <Form.Group controlId="formBasicNota">
                                    <Form.Label>Nota</Form.Label>
                                    <Form.Control type="text" value={nota} onChange={event => setNota(event.target.value)} placeholder="Defina a nota do objetivo"></Form.Control>
                                    <Button type="submit">Salvar</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Objetivo</th>
                            <th>Aluno</th>
                            <th>Nota</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            objetivoAluno.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.objetivo.descricao}</td>
                                    <td>{item.alunoTurma.usuario.nome}</td>
                                    <td>{item.nota}</td>
                                    <td>
                                    <Button variant="info" value={item.id} onClick={event => Editar(event)}>Editar</Button>
                                    <Button variant="warning" value={item.id} onClick={event => Excluir(event)}>Excluir</Button>
                                    </td>
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