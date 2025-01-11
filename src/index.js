import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './style.css';

// Define the Header component
const Heading = () => (<h1>Hello World!, This is React!!!</h1>);

// Define the Container component and include the Header inside
const Container = () => (
  <div className="container">
    <Heading />
  </div>
);

// Define the App component and include the Container inside
const App = () => (
  <div>
    <Container />
  </div>
);


// For React 18 and later, use 'createRoot'
const root = ReactDOM.createRoot(document.getElementById('root'));  // 'root' is the id of the div in index.html

root.render(<App />);

