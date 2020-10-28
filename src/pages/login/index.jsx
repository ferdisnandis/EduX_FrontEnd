import React from 'react';
import Menu from '../../components/menu/index'
import Rodape from '../../components/rodape/index'
import logo from '../../assets/img/logo_2.png'
import { Container, Form, Button } from 'react-bootstrap'
import './index.css'

const Login = () => {
    return (
        <div>
            <Menu />
            <Container className='form-heigh'>
                <Form className='form-signin' onSubmit={event => logar(event)}>
                    <div className='text-center'>
                        <img src={logo} alt="EduX Logo" style={{ width : '80px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="text" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Insira sua senha" value={senha} onChange={event => setSenha(event.target.value)} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/cadastrar' style={{marginTop : '30px'}}>Não tenho conta!</a>
            </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Login;