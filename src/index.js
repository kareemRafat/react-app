import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './components/App.jsx';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';


//virtual dom connect with real dom
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

