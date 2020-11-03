import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Turma from './pages/turmaespecifica';
import Login from './pages/login';
import Dashboard from './pages/professor/dashboard'
import TimeLine from './pages/timeline'
import Objetivos from './pages/objetivos_teste';
import CrudObjetivo from './pages/professor/crudObjetivos'
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/professor/dashboard'
import TimeLine from './pages/timeline'
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import SemPermissao from './pages/sempermissao'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import NaoEncontrado from './pages/naoencontrado/naoencontrado';


const RotaPrivada = ({component : Component, ...rest }) => (
  <Route 
    {...rest}
    render={ props => {
        localStorage.getItem('token-edux') !==null ?
        <Component {...props} /> :
        <Redirect to={{ pathname:'/sempermissao', state :{from : props.location}}} />
      }
    }
  />
);

const RotaPrivadaProfessor = ({component : Component, ...rest }) => (
  <Route 
    {...rest}
    render={ props => {
        localStorage.getItem('token-edux') !==null && jwt_decode(localStorage.getItem('token-edux')) ?
        <Component {...props} /> :
        <Redirect to={{ pathname:'/sempermissao', state :{from : props.location}}} />
      }
    }
  />
);

//Rotas da aplicação
const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/objetivos' component={Objetivos} />
      <Route path='/login' component={Login} />
      <Route path='/cadastrar' component={Cadastrar} />
      <Route path='/turma' component={Turma} />
      <Route component={NaoEncontrado} />
      <RotaPrivadaProfessor exact path='/professor/dashboard' component={Dashboard} />
      <RotaPrivada path='/timeline' component={TimeLine} />
      <RotaPrivada path='/sempermissao' component={SemPermissao} />
      <RotaPrivadaProfessor path='/professor/crudObjetivo' component={CrudObjetivo} />
    </Switch>
  </Router>
)

ReactDOM.render
(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
