import React from 'react';
import Menu from '../../components/menu/index.jsx'
import Rodape from '../../components/rodape/index.jsx'
import logo from '../../assets/img/logo_2.png'
import { Form, Button, FormGroup, FormControl } from 'react-bootstrap'
import './index.css'

const Cadastrar = () => {

    return (
        <div>
         <Menu />
                <Form className='form-signin' >
                    <div className='text-center'>
                        <img src={logo} alt="EduX Logo" style={{ width : '80px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr />

                    <FormGroup controlId="formBasicNomeCompleto">
                        <h4>Insira seu nome completo</h4>
                        <FormControl type="text" placeholder="Insira seu nome completo" required />
                    </FormGroup>

                    <FormGroup controlId="formBasicEmail">
                        <h4>Insira seu email</h4>
                        <FormControl type="text" placeholder="Insira seu email" required />
                    </FormGroup>

                    <FormGroup controlId="formBasicSenha">
                        <h4>Insira sua senha</h4>
                        <FormControl type="text" placeholder="Insira sua senha" required />
                    </FormGroup>
    
                    <Button variant="primary" type="submit">
                        Enviar
                </Button>
                    <br/><br/>
                <a href='/login' style={{marginTop : '30px'}}>Já tenho conta!</a>
                </Form>
            <Rodape />
        </div>
    )
}

export default Cadastrar;