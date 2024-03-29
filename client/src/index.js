import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './css/index.css';
import 'semantic-ui-css/semantic.min.css'
import './css/App.css';
import App from './components/App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
