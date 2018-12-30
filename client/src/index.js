import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
, document.getElementById('root'));

