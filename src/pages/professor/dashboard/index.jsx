import React, { useEffect} from 'react';
import jwt_decode from 'jwt-decode'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'

const Dashboard = () => {
    useEffect(() => {
        teste();
    }, []);
    
    const teste = () => {
        alert(jwt_decode(localStorage.getItem('token-edux')).permissao === 'Professor')
    }
    return (
        <div>
            <Menu />
                <h1 className="text-center">Dashboard </h1>
            <Rodape />
        </div>
    )
}

export default Dashboard;