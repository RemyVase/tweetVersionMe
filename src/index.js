import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import { Router, browserHistory } from 'react-router';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';


render(
  <Router 
    history={browserHistory}
    routes={router}
  />,
  document.getElementById('root')
);