import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import divElement from './divModule.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

// get divElement from divModule.js
root.render(divElement);




// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

