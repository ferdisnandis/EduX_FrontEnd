import React from 'react';
import Dashboard from './pages/professor/dashboard'
import TimeLine from './pages/timeline'
import ReactDOM from 'react-dom';
import './index.css';
import Turma from './pages/turmaespecifica';
import Login from './pages/login';
import Objetivos from './pages/objetivos_teste';
import Home from './pages/home'
import Cadastrar from './pages/cadastrar'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NaoEncontrado from './pages/naoencontrado/naoencontrado';

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
      <Route exact path='/professor/dashboard' component={Dashboard} />
      <Route path='/timeline' component={TimeLine} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
