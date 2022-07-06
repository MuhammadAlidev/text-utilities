import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './Components/About.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> }/>
    </Routes>
    <Routes>
      <Route path='/text-utils' element={ <App /> }/>
    </Routes>
    <Routes>
      <Route path='/about' element={ <About /> }/>
    </Routes>
  </BrowserRouter>
);