import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './src/app/App';
import history from './src/app/history';




ReactDOM.render((
  <BrowserRouter history={history}>
      <App/>
  </BrowserRouter>
),document.getElementById('container'));   
