// Модули
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Компоненты
import App from './App';
import 'modern-normalize/modern-normalize.css';
// import './sass/main.scss';
// import reportWebVitals from './reportWebVitals';

// стили

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
