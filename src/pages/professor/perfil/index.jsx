import React, { useState, useEffect } from 'react'
import { Container, Card, Table } from 'react-bootstrap';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape'
import jwt_decode from 'jwt-decode';
import {url} from '../../../utils/constant'

const PerfilProf = () => {
    const [id, setId] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [professorTurma, setProfessorTurma] = useState([]);

    useEffect(() => {
        Listar();
    }, []);
 
    const token = localStorage.getItem('token-edux');
        const Listar = () => {
            fetch(url + '/ProfessorTurma')
                .then(response => response.json())
                .then(data => {
                    setProfessorTurma(data.data);
                    console.log(data.data);
            })
            .catch(err => console.error(err));
        }
  
return (
    <div>
        <Menu />
            <h1 className= 'text-center' >Perfil</h1>

        <Container>
            <p className= 'text-center'>NOME: {jwt_decode(token).nameid}</p>
            <p className= 'text-center'>PERFIL: {jwt_decode(token).permissao}</p>

            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Curso</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            professorTurma.map((item, index) => {
                                if (token.idUsuario === professorTurma.idUsuario){ 
                            return (
                                <tr key={index}>
                                    <td>{item.descricao}</td>
                                </tr>
                            )}})
                        }
                            
                        
                    </tbody>
                </Table>
        </Container>
        <Rodape />
    </div>
    )
}

export default PerfilProf;