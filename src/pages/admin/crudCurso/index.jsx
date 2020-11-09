import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudCurso = () => {
    const [idCurso, setIdCurso] = useState(0);
    const [idInstituicao, setIdInstituicao] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [cursos, setCursos] = useState([]);
    const [instituicoes, setInstituicoes] = useState([]);

useEffect(() => {
    ListarCursos()
    ListarInstitiuicao()
}, []);

const ListarInstitiuicao = () => {
    fetch(url + 'instituicao')
        .then(response => response.json())
        .then(data => {
            setInstituicoes(data.data);
            console.log(data.data)
            limparCampos();
        })
        .catch(err => console.error(err));
}

const ListarCursos = () => {
    fetch(url + 'curso')
        .then(response => response.json())
        .then(data => {
            setCursos(data.data);
            limparCampos();
        })
        .catch(err => console.error(err));
}

const Editar = (event) => {
    event.preventDefault();

    fetch(`${url}curso/${event.target.value}`)
        .then(response => response.json())
        .then(dado => {
            console.log(dado)
            setIdCurso(dado.idCurso)
            setIdInstituicao(dado.idInstituicao)
            setTitulo(dado.titulo)
        })
}

const Excluir = (event) => {
    event.preventDefault();

    console.log(event.target.value)

    fetch(url + 'curso/' + event.target.value, {
        method: 'DELETE',
        headers: {
            'authorization': 'Bearer ' + localStorage.getItem('token-edux')
        }
    })
        .then(response => response.json())
        .then(dados => {
            alert('Curso removido!')
            ListarCursos()
        })
}

const salvar = (event) => {
    event.preventDefault();

    const curso = {
        titulo: titulo,
        idInstituicao: idInstituicao,
    }

    let method = (idCurso === 0 ? 'POST' : 'PUT')
    let urlRequest = (idCurso === 0 ? `${url}curso` : `${url}curso/${idCurso}`)

    fetch(urlRequest, {
        method: method,
        body: JSON.stringify(curso),
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token-edux')
        }
    })
        .then(response => response.json())
        .then(dados => {
            alert('Curso salvo!');
            ListarCursos();
        })
}

const limparCampos = () => {
    setIdCurso(0);
    setIdInstituicao(0);
    setTitulo('');
}

return (
    <div>
        <Menu />
        <Container>
           <h1>Curso</h1>

           <Card >
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicTitulo">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" value={titulo} onChange={event => setTitulo(event.target.value)} placeholder="Digite o nome" />
                            </Form.Group>
                            <Form.Group controlId="formBasicInstituicao">
                                <Form.Label>Instituição</Form.Label>
                                <Form.Control as="select" size="sg" custom defaultValue={idInstituicao} onChange={event => setIdInstituicao(parseInt(event.target.value))}>
                                    <option value={0}>Selecione uma instituição</option>
                                    {
                                        instituicoes.map((item, index) => {
                                            return (
                                                <option key={index} value={item.idInstituicao}>{item.nome}</option>
                                            )
                                        })
                                    }
                                </Form.Control>
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Instituição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cursos.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.idCurso}</td>
                                        <td>{item.titulo}</td>
                                        <td>{item.idInstituicaoNavigation.nome}</td>
                                        <td>
                                            <Button variant="info" value={item.idCurso} onClick={event => Editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.idCurso} onClick={event => Excluir(event)} style={{ marginLeft: '15px' }}>Excluir</Button>
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

export default CrudCurso;