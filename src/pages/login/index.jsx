import React, { useState } from 'react';
import {url} from '../../utils/constant'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo_2.png'
import './index.css'

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = {
        Email : email,
        Senha : senha
    }
    const Logar = (event) => {
        event.preventDefault();

        fetch(url + '/api/login', {
            method : 'POST',
            body : JSON.stringify(login), 
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('Dados inválidos')
        })
        .then(data => {
            localStorage.setItem('token-edux', data.token);

            let usuario = jwt_decode(data.token);

            //Informações do usuário decodificado no console
            console.log(usuario);
            
            if(usuario.role === 'c1817683-18e1-4ec9-8a74-f2cdff6a2da1'){
                history.push('/professor/crudObjetivo');
            } else {
                history.push('/timeline')
            }
        
        })
        .catch(err => console.error(err))
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
                            <Form.Control type="email" placeholder="Insira seu email" value={email} onChange={event => setEmail(event.target.value)} required/>
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