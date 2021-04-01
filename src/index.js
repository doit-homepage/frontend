import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer/index'
const { createProxyMiddleware } = require('http-proxy-middleware')


const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App 
                getToken={store.getState()}
                setToken={(token,loginState) => store.dispatch({ type: 'CREATE_TOKEN', token: token, loginState: loginState})}        
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
