import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import App from './src/app.jsx';
import Students from './src/students.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >

      
    </Route>
    <Route path="/students" component={Students} />
  </Router>
  ),document.querySelector("#container")
);
