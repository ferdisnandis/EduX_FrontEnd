import React from 'react';
import Menu from '../../components/menu/index.jsx'
import Rodape from '../../components/rodape/index.jsx'
import logo from '../../assets/img/logo_2.png'
import { Grid, Form, Button } from 'react-bootstrap'

//import './index.css'

const Cadastrar = () => {

    return (
        <div>
         
                <Form className='form-signin' >
                    <div className='text-center'>
                        <img src={logo} alt="EduX Logo" style={{ width : '80px'}} />
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr />
                </Form>

            <Rodape />
        </div>
    )
}

export default Cadastrar;