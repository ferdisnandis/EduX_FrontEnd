import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
//import Home from './pages/home'
import Login from './pages/login';
import Objetivos from './pages/objetivos';
=======
import Home from './pages/home'
import Login from './pages/login'
>>>>>>> 170f096b1699054c48aa1435fb3b84ee433de32c
import Cadastrar from './pages/cadastrar'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NaoEncontrado from './pages/naoencontrado/naoencontrado';

//Rotas da aplicação
const routing = (
  <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path='/' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route path='/objetivos' component={Objetivos} />
=======
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <Route component={NaoEncontrado} />
>>>>>>> 170f096b1699054c48aa1435fb3b84ee433de32c
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
