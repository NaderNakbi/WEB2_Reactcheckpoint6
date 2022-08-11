import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './profile/profile';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profile fullName='nader,' 
  bio=' I’m interested in software and web development, I’m currently learning react and node js'
  profession='engineer' user="Nad007"/>

  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
