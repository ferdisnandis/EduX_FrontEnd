import React from 'react';
import './index.css'


const Rodape = () => {
    
    return(
    <div className="body">
        <footer className="text-center" style={{ marginTop : '70px', background : '#A9F08F' }}>
        <h1>Senai de informática</h1>
        <small>Desenvolvido pela equipe Alpha</small>
        <div className="sociais">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram-square"></i>
        
        </div>
    </footer>
    </div>
    )
}   

export default Rodape;