import React from 'react';
import Login from './components/Login/login'
import Layout from './components/Layout/layout'
import {Routes, Route, BrowserRouter} from "react-router-dom"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/layout" element={<Layout/>} />
      <Route path="/login" element={<Login/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
