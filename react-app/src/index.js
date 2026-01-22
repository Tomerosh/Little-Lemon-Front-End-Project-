import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>Little Lemon</title>
    <meta name="description" content="Taste the Mediterranean by the sea—fresh ingredients, vibrant flavors, and warm hospitality, inviting you to relax and savor every moment."/>
    <meta name="og:title" content="Little Lemon"/>
    <meta name="og:description" content="Taste the Mediterranean by the sea—fresh ingredients, vibrant flavors, and warm hospitality, inviting you to relax and savor every moment."/>
    <meta property='og:image' content='./assets/images/yellow-lemon.png'></meta>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
