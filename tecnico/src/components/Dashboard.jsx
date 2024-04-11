import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 

function Dashboard() {
  const [username, setUsername] = useState('');

  useEffect(() => {
        // Recuperar datos guardados localmente y establecerlos como valores iniciales
        const storedUser = localStorage.getItem('usuario');
        if (storedUser) {
          const { username: storedUsername } = JSON.parse(storedUser);
          setUsername(storedUsername);
        }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Iniciar Sesión Exitoso {username} </h2> 
    </div>
  ); 
}

export default Dashboard;