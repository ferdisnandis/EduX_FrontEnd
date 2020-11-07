import React, { useEffect, useState} from 'react';
import { Button, Form, Card, Container, Col, Row } from 'react-bootstrap';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import {url} from '../../utils/constant'

const TimeLine = () => {

    const [texto, setTexto] = useState('');
    const [dica, setDica] = useState([]);
    const [UrlImagem, setUrlImagem] = useState('');
    const [curtidas, setCurtidas]= useState('');

    useEffect(() => {
        Listar();
    }, []);

    const Listar = () => {
        fetch(url + '/timeline')
            .then(response => response.json())
            .then(data => {
                setDica(data.data);
                console.log(data.data);
               // limparCampos();
        })
        .catch(err => console.error(err));
    }

    const Salvar = (event) => {
        event.preventDefault();

        const dica = {
            texto : texto,
            curtidas : curtidas,
            dica : dica,
            imagem : UrlImagem,
        }
    }
    return (
        <div>
            <Menu />
                <Container>
                    <h1 className='text-center'>TimeLine</h1>

                    <Card>
                        <Card.Body>
                            <Form onSubmit={ event => Salvar(event)}>
                                <Form.Group controlId="formBasicTexto">
                                    <Form.Label>Descrição</Form.Label>
                                    <Form.Control type="text" value={texto} onChange={event => setTexto(event.target.value)} placeholder="Uma breve descrição para a dica"></Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="fileTimeLine" label="Imagem da Postagem" onChange={event => {setUrlImagem(event)}} />
                                    {UrlImagem && <img src={UrlImagem} style={{ width : '120px'}} />}
                                    <Button type="submit">Salvar</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            <Rodape />
        </div>
    )
}
export default TimeLine;