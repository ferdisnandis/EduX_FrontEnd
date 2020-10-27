import React from 'react';
import logo from '../../assets/img/logo_2.png';


const Rodape  = () => {
    return (
        <footer className="text-center " style={{marginTop : '70px' }}>
            <h1 href="/"><img src={logo} alt='Logo da EduX' style={{ width: '150px' }} /></h1>
            <small>Desenvolvido pela equipe Alpha</small>
        </footer>
    )
}

export default Rodape;