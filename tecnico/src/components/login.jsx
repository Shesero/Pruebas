import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; 


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {

    if (!username || !password) {
      setError('Ingrese Usuario y Contraseña');
    } else {
      setError('');
      console.log('Inicio de sesión exitoso. Usuario:', username);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <div className="error-message">{error}</div>}
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p className="register-link">¿Aún no tienes cuenta? <Link to="/registro">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;