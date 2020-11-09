import React, { useEffect, useState } from 'react';
import { Button, Form, Card, Container, Col, Row } from 'react-bootstrap';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { url } from '../../utils/constant'
import curtir from '../../assets/img/curtir.png'
import './index.css' 

const TimeLine = () => {

    const [texto, setTexto] = useState('');
    const [dica, setDica] = useState([]);
    const [curtidas, setCurtidas] = useState('');

    useEffect(() => {
        Listar();
    }, []);

    const Listar = () => {
        fetch(url + '/dica')
            .then(response => response.json())
            .then(data => {
                setDica(data.data);
                console.log(data.data);
                // limparCampos();
            })
            .catch(err => console.error(err));
    }
    const Curtir = (event, idDica) => {
        event.preventDefault();
        let formdata = new FormData();

        formdata.append('IdUsuario', localStorage.getItem('idUsuario'));
        formdata.append('IdDica', idDica);
        fetch(url + '/curtida', {
            method: 'POST',
            body: formdata,
        })
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                }
            })

            .catch(err => console.error(err))
    }

    const Salvar = (event) => {
        event.preventDefault();
        let formdata = new FormData();

        formdata.append('IdUsuario', localStorage.getItem('idUsuario'));
        formdata.append('Texto', texto);
        fetch(url + '/dica', {
            method: 'POST',
            body: formdata,
        })
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                }
            })

            .catch(err => console.error(err))
    }
    return (
        <div>
            <Menu />
            <Container>
                <h1 className='text-center'>TimeLine</h1>

                <Card>
                    <Card.Header>Ajude os outros :), dando sua dica</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicTexto">
                                <Form.Control type="text" value={texto} onChange={event => setTexto(event.target.value)} placeholder="Mande suas dicas para os outros usuarios aqui"></Form.Control>
                                <Button type="submit" onClick={event => { Salvar(event) }}>Salvar</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                {
                    dica.map((item) => {
                        return (<Card>
                            <Card.Header>Dica postada por: {item.usuario.nome}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p style={{ fontStyle: 'italic', fontSize: '20px' }}>{item.texto}</p> <br />
                                    <div className='curtirconta'>
                                        <button className='curtirbutton' type='submit' onClick={event => { Curtir(event, item.id) }}>
                                            <img src={curtir} style={{ width: '32px', height: '32px' }} alt="" />
                                        </button>
                                        <p className='conta'>{item.totalCurtidas}</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
            </Container>
            <Rodape />
        </div>
    )
}
export default TimeLine;