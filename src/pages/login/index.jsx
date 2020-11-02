import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import { Container, Form, Button } from 'react-bootstrap'
import logo from '../../assets/img/logo_2.png'
import './index.css'

const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');

    const Logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`);
        
        const Login = {
            Email : email,
            Senha : senha
        }

        fetch('http://localhost:64557/api/login',{
            method : 'POST',
            body : JSON.stringify(Login),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            //Verifica a resposta da API
            if(response.ok){
                return response.json();
            }
            //Caso não funcione
            alert ('Dados inválidos');
        })
        .then(data => {
            localStorage.setItem('token-edux', data.token);
            
            let usuario = jwt_decode(data.token);
            
            console.log(usuario);

            if(usuario.role === 'Professor'){
                history.push('/professor/dashboard');
            } else {
                history.push('/objetivos')
            }
            
            history.push('/objetivo');
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
    <Menu />
<Container className='form-height'>
    <Form className='form-signin' onSubmit={event => Logar(event => Logar(event))}>
        <div className = 'text-center'>
            <img src={logo} alt='EduX' style={{ width : '64px' }} />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Insira seu email" value={email} onChange={event => setEmail(event.target.value)} required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Insira sua senha" value={senha} onChange={event => setSenha(event.target.value)} required/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Entrar
        </Button>
        <br/><br/>
        <a href='/cadastrar' style={{ marginTop : '30px'}}>Quero criar minha conta!</a>
        </div>
    </Form>
</Container>
        <Rodape />
        </div>
    )
}
export default Login;