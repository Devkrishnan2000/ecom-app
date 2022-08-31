import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import HomePage from './components/homepage';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
      
    
  );
//ReactDOM.render(<Navbar/>,document.getElementById("root"));