import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registry from 'app-registry';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './store';
import request from './services/request';


import App from './App';
import 'bootstrap';

registry.register('request', request);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('faidApp')
);