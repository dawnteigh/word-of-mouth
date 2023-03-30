import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './css/index.css';
import App from './components/App';
import rootReducer from './reducers'

const store = createStore(rootReducer)

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
