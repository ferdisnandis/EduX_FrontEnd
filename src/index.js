import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import Dashboard from './pages/professor/dashboard'
import TimeLine from './pages/timeline'
import ReactDOM from 'react-dom';
import './index.css';
import Turma from './pages/turmaespecifica';
import Login from './pages/login';
import Objetivos from './pages/objetivos_teste';
import CrudObjetivo from './pages/professor/crudObjetivo'
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SemPermissao from './pages/sempermissao'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import NaoEncontrado from './pages/naoencontrado/naoencontrado';
import TimeLine1 from './pages/feed';

  const RotaPrivada = ({component : Component, ...rest}) => (
    <Route 
      {...rest}
      render = { props => 
          localStorage.getItem('token-edux') !== null ?
          (<Component {...props} />) :
          (<Redirect to={{ pathname :'/login', state :{from : props.location}}} />) 
      }
    />
  );

  const RotaPrivadaProfessor = ({component : Component, ...rest}) => (
    <Route 
      {...rest}
      render= { props => 
<<<<<<< HEAD
          localStorage.getItem('token-edux') !==null && jwt_decode(localStorage.getItem('token-edux')).permissao === 'Professor' ?
=======
          localStorage.getItem('token-edux') !==null && jwt_decode(localStorage.getItem('token-edux')).role === 'c1817683-18e1-4ec9-8a74-f2cdff6a2da1' ?
        
>>>>>>> 613a7c9c4e62a8bf650b020e2d963ae85e943bea
          <Component {...props} /> :
          <Redirect to={{ pathname : '/login', state :{from : props.location}}} />
        }
    />
  );  

//Rotas da aplicação
const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <RotaPrivada path='/objetivos' component={Objetivos} />
      <Route path='/login' component={Login} />
      <Route path='/cadastrar' component={Cadastrar} />
      <Route path='/turma' component={Turma} />
      <RotaPrivadaProfessor path='/professor/dashboard' component={Dashboard} />
      <RotaPrivada path='/timeline' component={TimeLine} />
      <RotaPrivadaProfessor path='/professor/crudObjetivo' component={CrudObjetivo} />
      <RotaPrivada  component={SemPermissao} />
      <Route component={NaoEncontrado} />
    </Switch>
  </Router>
)

ReactDOM.render (
 routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
