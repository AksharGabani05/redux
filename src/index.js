import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { state } from './Redux/store';
// import store from './Redux/store'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={state}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
