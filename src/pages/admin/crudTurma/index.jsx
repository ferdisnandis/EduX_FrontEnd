import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import {url} from '../../../utils/constant'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'

const CrudTurma = () => {
    const [id, setId] = useState(0)
    const [idCurso, setIdCurso] = useState(0)
    const [descricao, setDescricao ] = useState('');
    const [curso, setCurso] = useState([]);
    const [turmas, setTurmas] = useState([])

    useEffect(() => {
        ListarTurmas();;
        ListarCursos();
    }, []);

    const ListarTurmas = () => {
        fetch(url + 'turma')
        .then(response => response.json())
        .then(data => {
            setTurmas(data.data)
            console.log(data)
            //LimparCampos();
        })
        
        .catch(err => console.error(err));
    }

    const ListarCursos = () => {
        fetch(url + 'curso', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(data => {
            setCurso(data.data)
            //LimparCampos();
        })
        .catch(err => console.error(err));
    }

    const Editar = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        fetch(url + 'turma/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            console.log(dado)
            setId(dado.id)
            setDescricao(dado.descricao)
            setCurso(dado.idCurso)
        })
    }

    const Excluir = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        fetch(url + 'turma/' + event.target.value, {
            method: 'DELETE',
            headers:{
                'authorization' : 'Bearer' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            alert('Turma removida')
            ListarTurmas();
        })
    }

    const Salvar = (event) => {
        event.preventDefault();

        const turma = {
            descricao: descricao,
            idCurso: idCurso
        }
        let method = (id === 0 ? 'POST' : 'PUT')
        let urlRequest = (id === 0 ? `${url}turma` : `${url}curso/${id}`)
    
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
        setId(0);
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
                            <Form.Control as="select" value={idCurso} onChange={event => setIdCurso(event.target.value)}>
                                <option>Selecione um curso</option>
                                {
                                    curso.map((item, index) => {
                                        return(
                                            <option key={index} value={item.id}>{item.titulo}</option>
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
                                    <td>{item.curso.titulo}</td>
                                    <td>{item.descricao}</td>
                                    <td>
                                        <Button variant="info" value={item.id} onClick={event => Editar(event)}>Editar</Button>
                                        <Button variant="danger" value={item.id} onClick={event => Excluir(event)}>Excluir</Button>
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