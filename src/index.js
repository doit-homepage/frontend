import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { createProxyMiddleware } = require('http-proxy-middleware')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
