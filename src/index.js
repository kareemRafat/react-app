import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

// get app from App.js as variable
// root.render(App);

// get app as a function
root.render(<App/>);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

