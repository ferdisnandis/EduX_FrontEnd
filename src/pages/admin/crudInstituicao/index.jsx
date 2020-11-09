import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import {url} from '../../../utils/constant'

const CrudInsituicao = () => {
    const [idInstituicao, setIdInstituicao] = useState(0);
    const [nome, setNome] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [instituicoes, setInstituicoes] = useState([])

    useEffect(() => {
        Listar()
    }, []);

    const Listar = () => {
        fetch(url + 'instituicao')
            .then(response => response.json())
            .then(data => {
                setInstituicoes(data.data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const Editar = (event) => {
        event.preventDefault();

        fetch(`${url}instituicao/${event.target.value}`)
            .then(response => response.json())
            .then(dado => {
                console.log(dado)
                setIdInstituicao(dado.idInstituicao)
                setNome(dado.nome)
                setLogradouro(dado.logradouro)
                setNumero(dado.numero)
                setComplemento(dado.complemento)
                setBairro(dado.bairro)
                setCidade(dado.cidade)
                setUf(dado.uf)
                setCep(dado.cep)
            })
    }

    const Excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(`${url}'crudInstituicao/'${event.target.value}`, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Instituição removida!')
                Listar()
            })
    }

    const salvar = (event) => {
        event.preventDefault();

        const instituicao = {
            nome: nome,
            logradouro: logradouro,
            numero: numero,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            cep: cep
        }

        let method = (idInstituicao === 0 ? 'POST' : 'PUT')
        let urlRequest = (idInstituicao === 0 ? `${url}instituicao` : `${url}instituicao/${idInstituicao}`)

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(instituicao),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-edux')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Instituição Salva!');
                Listar();
            })
    }

    const limparCampos = () => {
        setIdInstituicao(0);
        setNome('');
        setLogradouro('');
        setNumero('');
        setComplemento('');
        setBairro('');
        setCidade('');
        setUf('');
        setCep('');
    }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Instituição</h1>
            <Card >
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" value={nome} onChange={event => setNome(event.target.value)} placeholder="Insira o nome" />
                                <Form.Label>Logradouro</Form.Label>
                                <Form.Control type="text" value={logradouro} onChange={event => setLogradouro(event.target.value)} placeholder="Insira o logradouro" />
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="text" value={numero} onChange={event => setNumero(event.target.value)} placeholder="Insira o número" />
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control type="text" value={complemento} onChange={event => setComplemento(event.target.value)} placeholder="Insira o complemento" />
                                <Form.Label>Bairro</Form.Label>
                                <Form.Control type="text" value={bairro} onChange={event => setBairro(event.target.value)} placeholder="Insira o grupo" />
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control type="text" value={cidade} onChange={event => setCidade(event.target.value)} placeholder="Insira a cidade" />
                                <Form.Label>UF</Form.Label>
                                <Form.Control type="text" value={uf} onChange={event => setUf(event.target.value)} placeholder="Insira a Unidade Federal" />
                                <Form.Label>CEP</Form.Label>
                                <Form.Control type="text" value={cep} onChange={event => setCep(event.target.value)} placeholder="Insira o CEP" />
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table>
                <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Logradouro</th>
                            <th>Numero</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Uf</th>
                            <th>Cep</th>
                            <th>Ações</th>
                        </tr>
                </thead>
                <tbody>
                {
                            instituicoes.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nome}</td>
                                        <td>{item.logradouro}</td>
                                        <td>{item.numero}</td>
                                        <td>{item.complemento}</td>
                                        <td>{item.bairro}</td>
                                        <td>{item.cidade}</td>
                                        <td>{item.uf}</td>
                                        <td>{item.cep}</td>
                                        <td>
                                            <Button variant="info" value={item.idInstituicao} onClick={event => Editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.idInstituicao} onClick={event => Excluir(event)} style={{ marginLeft: '10px' }}>Excluir</Button>
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
export default CrudInsituicao;