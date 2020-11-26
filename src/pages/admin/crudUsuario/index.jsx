import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudUsuario = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idPerfil, setIdPerfil] = useState(0);
    const [perfil, setPerfil] = useState([]);
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        ListarUsuario();
        ListarPerfil();
    }, []);

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

    const ListarPerfil = () => {
        fetch(url + 'perfil', {
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                setPerfil(data.data);
             //   limparCampos();
            })
            .catch(err => console.error(err));
    }
    
    const Editar = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    
        fetch(url + 'usuario/' + event.target.value, {
            method : 'GET',
            headers : {
                'authorization' : 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dado => {
                console.log(dado)
                setId(dado.id)
                setNome(dado.nome)
                setIdPerfil(dado.idPerfil)
                setNome(dado.titulo)
                setEmail(dado.email)
                setSenha(dado.senha)
            })
    }

    const Excluir = (event) => {
        event.preventDefault();
        console.log(event.target.value);
    
        fetch(url + 'usuario/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('Usuario removido!')
    
                ListarUsuario();
            })
    }

    const Salvar = (event) => {
        event.preventDefault();
    
        const usuario = {
            nome: nome,
            email : email,
            senha : senha,
            idPerfil : idPerfil,
        }
    
        let method = (id === 0 ? 'POST' : 'PUT')
        let urlRequest = (id === 0 ? `${url}usuario` : `${url}usuario/${id}`)
    
        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(usuario),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Usuário criado!');
                ListarUsuario();
            })
    }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Usuario</h1>

                <Card>
                    <Card.Body>
                        <Form onSubmit={event => Salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Digite o nome" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={email} onChange={event => setEmail(event.target.value)} placeholder="Digite o email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicSenha">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="text" value={senha} onChange={event => setSenha(event.target.value)} placeholder="Digite a senha" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPerfil">
                                <Form.Label>Perfil</Form.Label>
                                    <Form.Control as="select" value={idPerfil} onChange={event => setPerfil(event.target.value)}>
                                        <option>Selecione um Perfil</option>
                                            {
                                            perfil.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.permissao}</option>
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
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Perfil</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuario.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.senha}</td>
                                        <td>{item.perfil.permissao}</td>
                                        <td>
                                            <Button variant="info" value={item.id} onClick={event => Editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.id} onClick={event => Excluir(event)} style={{ marginLeft: '15px' }}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default CrudUsuario;