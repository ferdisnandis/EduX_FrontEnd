import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudProfessorTurma = () => {
    const [id, setId ] = useState(0);
    const [idUsuario, setIdUsuario] = useState(0);
    const [idTurma, setIdTurma] = useState(0)
    const [descricao, setDescricao] = useState('');
    const [professorTurma, setProfessorTurma] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [turma, setTurma] = useState([]);
    
    useEffect(() => {
        ListarProfessorTurma();
        ListarTurma();
        ListarUsuario();
    }, []);

    const ListarProfessorTurma = () => {
        fetch(url + 'ProfessorTurma')
            .then(response => response.json())
            .then(data => {
               console.log(data.data)
                setProfessorTurma(data.data);
              //  limparCampos();
        })
        .catch(err => console.error(err));
    }

    const ListarUsuario = () => {
        fetch(url + 'usuario', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                setUsuario(data.data);
             //   limparCampos();
            })
            .catch(err => console.error(err));
    }

    const ListarTurma = () => {
        fetch(url + 'turma', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                setTurma(data.data);
             //   limparCampos();
            })
            .catch(err => console.error(err));
    }

    const Excluir = (event) => {
        event.preventDefault();

        fetch(url + 'Professorturma/' + event.target.value, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Baerer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('Turma removida');

            ListarProfessorTurma();
        })
    }

    const Editar = (event) => {
        event.preventDefault();

        fetch(url + 'Professorturma/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.id);
            setIdUsuario(dado.idUsuario)
            setIdTurma(dado.idTurma)
            setDescricao(dado.descricao);
        })
    }

    const Salvar = (event) => {
        event.preventDefault();

        const ProfTur = {
            descricao : descricao,
            idTurma : idTurma,
            idUsuario : idUsuario,
        }

        let method = (id === 0 ? 'POST' : 'PUT');
        let urlRequest = (id === 0 ? `${url}ProfessorTurma` : `${url}ProfessorTurma/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(ProfTur),
            headers : {
                'content-type' : 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Professor Turma salvo');

            ListarProfessorTurma();
        })
        .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setId(0);
        setIdTurma(0);
        setIdUsuario(0);
        setDescricao('');
    }

    
    return(
        <div>
            <Menu />
            <Container>
                <h1>Cadastre-se na sua turma</h1>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => Salvar(event)}>
                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Descrição"></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicUsuario">
                                <Form.Label>Usuário</Form.Label>
                                    <Form.Control as="select" value={idUsuario} onChange={event => setIdUsuario(event.target.value)} placeholder="Instituicao">
                                    <option>Selecione um(a) professor(a)</option>
                                    {
                                        usuario.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.nome}</option>
                                            )
                                        })
                                    }
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicTurma">
                                <Form.Label>Turma</Form.Label>
                                    <Form.Control as="select" value={idTurma} onChange={event => setIdTurma(event.target.value)} placeholder="Selecione a turma">
                                    <option>Selecione uma turma</option>
                                    {
                                        turma.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.descricao}</option>
                                            )
                                        })
                                    }
                                    </Form.Control>
                                </Form.Group>

                                    <Button type="submit">Salvar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Turma</th>
                            <th>Professor</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            professorTurma.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.descricao}</td>
                                    <td>{item.turma.descricao}</td>
                                    <td>{item.usuario.nome}</td>
                                    <td>
                                        <Button variant="warning" value={item.id} onClick={event => Editar(event)}>Editar</Button>
                                        <Button variant="danger" value={item.id} onClick={event => Excluir(event)} style={{ marginLeft : '40px'}}>Excluir</Button>
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
export default CrudProfessorTurma;