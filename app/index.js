require('./style/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './script/components/app.jsx';

const root = document.querySelector('.root');
ReactDOM.render(<App/>, root);
