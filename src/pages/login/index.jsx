import React, { useState } from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo_2.png'
import './index.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = {
        Email : email,
        Senha : senha
    }
    const Logar = (event) => {
        event.preventDefault();

        fetch('https://localhost:64557/api/login', {
            method : 'POST',
            body : JSON.stringify(login), 
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => console.log(response.json()));
    }
 
    return (
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={event => Logar(event)} >
                    <div className='text-center'>
                        <img src={logo} alt='EduX' style={{ width: '64px' }} />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Insira seu email" value={email} onChange={event => setEmail(event.target.value)}required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Insira sua senha" value={senha} onChange={event => setSenha(event.target.value)} required/>

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                        <br /><br />
                        <a href='/cadastrar' style={{ marginTop: '30px' }}>Quero criar minha conta!</a>
                    </div>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}
export default Login;