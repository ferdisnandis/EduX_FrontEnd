import React, { useState } from 'react';
import {Card, Form, Button, Container, Table } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'
import Turma from '../../turmaespecifica';

const CrudTurma = () => {
    const [id, setId ] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [Curso, setCurso] = useState('');
    const [turma, setTurma] = useState([]);
    const [instituicao, setInstituicao] = useState('');
    
    const Listar = () => {
        fetch(url + 'Turma')
            .then(response => response.json())
            .then(data => {
               console.log(data.data)
                setTurma(data.data);
                limparCampos();
        })
        .catch(err => console.error(err));
    }

    const Excluir = (event) => {
        event.preventDefault();

        fetch(`${url}turma/${event.target.value}`, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Baerer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Turma removida');

            Listar();
        })
    }

    const Editar = (event) => {
        event.preventDefault();

        fetch(`${url}turma/${event.target.value}`, {
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            setId(dados.id);
            setDescricao(dados.descricao);
            setCurso(dados.Curso);
            setInstituicao(dados.instituicao);
        })
    }

    const Salvar = (event) => {
        event.preventDefault();

        const obj = {
            Curso : Curso,
            descricao : descricao,
            instituicao : instituicao,
        }

        let method = (id === "" ? 'POST' : 'PUT');
        let urlRequest = (id === "" ? `${url}turma` : `${url}turma/${id}`);

        fetch(urlRequest, {
            method : method,
            body : JSON.stringify(obj),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Turma salvo');

            Listar();
        })
        .catch(err => console.error(err))
    }

    const limparCampos = () => {
        setId(0);
        setDescricao('');
    }

    
    return(
        <div>
            <Menu />
            <Container>
                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => Salvar(event)}>
                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Turma</Form.Label>
                                    <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Nome da turma"></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicInstituicao">
                                <Form.Label>instituicao</Form.Label>
                                    <Form.Control type="text" value={instituicao} onChange={event => setInstituicao(event.target.value)} placeholder="Instituicao"></Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicCurso">
                                    <Form.Label>Curso</Form.Label>
                                    <Form.Control type="text" value={Curso} onChange={event => setCurso(event.target.value)} placeholder="Curso da turma"></Form.Control>
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
                            <th>Título</th>
                            <th>Curso</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            turma.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td>{item.descricao}</td>
                                    <td>{item.id.Titulo}</td>
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
export default CrudTurma;