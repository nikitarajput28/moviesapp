import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,  Route} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import Customers from './components/Customers';
import Navbar from './components/Navbar';
import Rentals from './components/Rentals';
import Login from './components/Login';


ReactDOM.render(
  <Router>
    <Navbar/>
    <Switch>
    <Route path="/customers">
    <Customers/>
    </Route>

    <Route path="/rentals">
    <Rentals/>
    </Route>

    <Route path="/login">
    <Login/>
    </Route>

    <Route  exact path="/">
    <App/>
    </Route>

    </Switch>


    


  </Router>,
  document.getElementById('root')
  );


