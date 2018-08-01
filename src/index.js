import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes.js';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>	,
 document.getElementById('root'));
registerServiceWorker();
