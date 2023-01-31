import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css'
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <HashRouter>
    {/* <Routes> */}
    {/* </Routes> */}
    <MainPage />
  </HashRouter>
</React.StrictMode> 
);
