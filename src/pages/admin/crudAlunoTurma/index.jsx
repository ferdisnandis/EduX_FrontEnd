import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudAlunoTurma = () => {
    const [id, setId] = useState(0);
    const [idUsuario, setIdUsuario] = useState(0);
    const [idTurma, setIdTurma] = useState(0);
    const [matricula, setMatricula] = useState('');
    const [alunoTurma, setAlunoTurma] = useState([])
    const [turma, setTurma] = useState([]);
    const [usuario, setUsuario] = useState([])


    useEffect(() => {
        ListarAlunoTurma();
        ListarTurma();
        ListarUsuario();
    }, []);

    const ListarAlunoTurma = () => {
        fetch(url + 'AlunoTurma')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setAlunoTurma(data.data)
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
            console.log(data)
            setTurma(data.data)
        })
        .catch(err => console.error(err))
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
    
    const Editar = (event) => {
        event.preventDefault();
        
        fetch(url + 'AlunoTurma/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(dado => {
            setId(dado.id)
            setIdTurma(dado.idTurma)
            setIdUsuario(dado.idUsuario)
            setMatricula(dado.matricula)
        })
    }

    const Excluir = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        fetch(url + 'AlunoTurma/' + event.target.value, {
            method : 'DELETE',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
        .then(response => response.json())
        .then(data => {
            alert('AlunoTurma removido')
            ListarAlunoTurma();
        })
    }

     const Salvar = (event) => {
         event.preventDefault();
        
         const alunoturma = {
             idUsuario : idUsuario,
             idTurma : idTurma,
             matricula : matricula
         }

         let method = (id === 0 ? 'POST' : 'PUT')
         let urlRequest = (id === 0 ? `${url}AlunoTurma` : `${url}AlunoTurma/${id}`)

         fetch(urlRequest, {
             method : method,
             body: JSON.stringify(alunoturma),
             headers: {
                 'content-type' : 'application/json',
                 'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
             }
         })
         //.then(reponse => response.json())
         .then(dados => {
             alert('AlunoTurma salvo');
             ListarAlunoTurma();
         })
     }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Aluno Turma</h1>

                <Card>
                    <Card.Body>
                        <Form onSubmit={event => Salvar(event)}>
                        <Form.Group controlId="formBasicTitulo">
                                    <Form.Label>Matrícula</Form.Label>
                                    <Form.Control type="text" value={matricula} onChange={event => setMatricula(event.target.value)} placeholder="Digite o número da matrícula" />
                        </Form.Group>

                         <Form.Group controlId="formBasicTurma">
                            <Form.Label>Turma</Form.Label>
                            <Form.Control as="select" value={idTurma} onChange={event => setIdTurma(event.target.value)}>
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

                        <Form.Group controlId="formBasicUsuario">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control as="select" value={idUsuario} onChange={event => setIdUsuario(event.target.value)}>
                                <option>Selecione um usuário</option>
                                {
                                    usuario.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.nome}</option>
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
                            <th>Matricula</th>
                            <th>Turma</th>
                            <th>Usuario</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        alunoTurma.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.matricula}</td>
                                    <td>{item.turma.descricao}</td>
                                    <td>{item.usuario.nome}</td>
                                    <td>
                                        <Button variant="danger" value={item.id} onClick={event => Excluir(event)}>Excluir</Button>
                                        <Button variant="info" value={item.id} onClick={event => Editar(event)}>Editar</Button>
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

export default CrudAlunoTurma