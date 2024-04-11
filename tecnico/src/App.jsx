import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import Registro from './components/Registro.jsx';
import Dashboard from './components/Dashboard.jsx';
import PasswordRecovery from './components/RecuperarPass.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/Recuperarpassword' element={<PasswordRecovery/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
