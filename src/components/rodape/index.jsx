import React from 'react';
import './index.css';
import logo from '../../assets/img/logo-senai.png'; //para importar uma imagem 


const Rodape = () => {
    
    return(
    <div className="body">
        <footer className="text-center" style={{ marginTop : '70px', background : '#A9F08F' }}>
        <div className="containerf">
        <img src={logo} alt="Logo da instuição Senai" className="logo-senai"/>
        <div>
                <nav className="institucional">
                    <ul>
                        <li><a href="/">Fale Conosco</a></li>
                        <li><a href="/">Regras</a></li>
                        <li><a href="/">Suporte</a></li>                                                
                        <li><a href="/">Política de Privacidade</a></li>
                        <li><a href="/">Termos de Uso</a></li>
                        <li><a href="/">Anuncie</a></li>                        
                    </ul>
                </nav>
            </div>
        <div className="sociais">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-github-square"></i>
         </div>
         <p>© 2020 SENAI INFORMÁTICA - Todos os direitos reservdos.</p>
        </div>
    </footer>
        </div>
    )
}   

export default Rodape;