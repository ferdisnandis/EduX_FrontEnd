import React, { useEffect } from 'react';
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom'

const CrudObjetivos = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token-edux');

        if(token !== null && jwt_decode(token).role !=='professor' ){
            history.push('/login');
        }
    },[])

    return (
        <div>
            <Menu />
                <h1>Crud Objetivos </h1>
            <Rodape />
        </div>
    )
}

export default CrudObjetivos;

