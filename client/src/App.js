import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import LoginPage from "./components/LoginPage";
import Nav from "./components/NavBar";
import Login from "./components/loginform";


function App () {

  return (

    <div>
    <BrowserRouter>
          <Nav/>
              <Switch>
                  <Route path='/loginPage'><LoginPage/></Route>
                  <Route path='/HomePage'><HomePage/></Route>
                  <Route path='/Portfolio'><Portfolio/></Route>
                  <Route path='/login'><Login/></Route>
                 </Switch>
          </BrowserRouter>
    </div>
  

  );
}

export default App;
