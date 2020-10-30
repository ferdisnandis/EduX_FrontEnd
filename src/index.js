import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/menu';
import Rodape from './components/rodape';
//import Home from './pages/home'
import Login from './pages/login';
import Cadastrar from './pages/cadastrar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch}  from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/cadastrar' component={Cadastrar} />
      </Switch>
    </div>
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