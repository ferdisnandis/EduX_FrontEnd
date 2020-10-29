import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import Rodape from './components/rodape/index.jsx';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrouserRouter as Router, Route, Link}  from "react-router-dom";

ReactDOM.render(
    <Cadastrar />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();