import React from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo_2.png'
import './index.css'

const Cadastrar = () => {
    
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin'>
                    <div className='text-center'>
                        <img src={logo} alt='EduX' style={{ width: '64px' }} />

                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" placeholder="Insira seu nome completo" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Insira seu email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Cadastrar
        </Button>

                        <br /><br />
                        <a href='/login' style={{ marginTop: '30px' }}>Já tenho minha conta!</a>
                    </div>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}
export default Cadastrar;