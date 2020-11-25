import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import {url} from '../../../utils/constant'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'

const CrudTurma = () => {
    const [idTurma, setIdTurma] = useState('')
    const [turmas, setTurmas] = useState([])
    const [descricao, setDescricao ] = useState('');
    const [idCurso, setIdCurso] = useState(0)
    const [curso, setCurso] = useState('');
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        ListarTurmas();;
        ListarCursos();
    }, []);

    const ListarTurmas = () => {
        fetch(url + 'turma')
        .then(response => response.json())
        .then(data => {
            setTurmas(data.data)
            //LimparCampos();
        })
        .catch(err => console.error(err));
    }

    const ListarCursos = () => {
        fetch(url + 'curso')
        .then(response => response.json())
        .then(data => {
            setCurso(data.data)
            //LimparCampos();
        })
        .catch(err => console.error(err));
    }

    const Editar = (event) => {
        event.preventDefault();

        fetch(`${url}turma/${event.target.value}`)
        .then(response => response.json())
        .then(dado => {
            console.log(dado)
            setIdTurma(dado.IdTurma)
            setDescricao(dado.descricao)
            setCurso(dado.curso)
        })
    }

    const Excluir = (event) => {
        event.preventDefault();
        console.log(event.target.value)

        fetch(url + 'turma/' + event.target.value, {
            method: 'DELETE',
            headers:{
                'authorization' : 'Bearer' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Turma removida')
            ListarTurmas()
        })
    }

    const Salvar = (event) => {
        event.preventDefault();

        const turma = {
            descricao: descricao,
            idCurso: idCurso
        }
        let method = (idTurma === 0 ? 'POST' : 'PUT')
        let urlRequest = (idTurma === 0 ? `${url}turma` : `${idTurma}`)
    
        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(turma),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dados => {
            alert('Turmas adicionada');
            ListarTurmas();
        })
    }

    const LimparCampos = () => {
        setIdTurma(0);
        setDescricao('');
        setCurso('');
    }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Turmas</h1>
                <p>Gerencie as turmas</p>
            <Card>
                <Card.Body>
                    <Form onSubmit={event => Salvar(event)}>
                        <Form.Group controlId="formBasicPerfil">
                            <Form.Label>Cursos</Form.Label>
                            <Form.Control as="select" size="sg" custom defaultValue={idTurma} onChange={event => setIdCurso(event.target.value)}>
                                <option value="">Selecione um curso</option>
                                {
                                    cursos.map((item, index) => {
                                        return (
                                            <option key={index} value={item.IdCurso}>{item.titulo}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formBasicTitulo">
                            <Form.Label>Descricao</Form.Label>
                            <Form.Control type="text" value={descricao} onChange={event => setDescricao(event.target.value)} placeholder="Insira a descrição da turma" />
                        </Form.Group>
                        <Button type="submit">Salvar</Button>
                    </Form>
                </Card.Body>
            </Card>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Curso</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        turmas.map((item, index) => {
                            return (
                                <tr jey={index}>
                                    <td>{item.idTurma}</td>
                                    <td>{item.idCurso.titulo}</td>
                                    <td>{item.nome}</td>
                                    <td>
                                        <Button variant="info" value={item.IdTurma} onClick={event => Editar(event)}>Editar</Button>
                                        <Button variant="danger" value={item.IdTurma} onClick={event => Excluir(event)}>Excluir</Button>
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

export default CrudTurma;