import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedIcon from '../assets/AnimatedIcon';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar datos guardados localmente y establecerlos como valores iniciales
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
      setUsername(storedUsername);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Ingrese Usuario y Contraseña');
    } else {
      const storedUser = localStorage.getItem('usuario');
      if (storedUser) {
        const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
        if (username === storedUsername && password === storedPassword) {
          setError('');
          console.log('Inicio de sesión exitoso. Usuario:', username);
          navigate('/dashboard');
        } else {
          setError('Usuario o contraseña incorrectos');
        }
      } else {
        setError('Usuario no encontrado');
      }
    }
  };

  return (
    <div className="login-container">
      <AnimatedIcon />
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
      <p className="Rpassword-link">¿Olvidaste tu contraseña? <Link to="/Recuperarpassword">Recuperar</Link></p>
    </div>
  );
}

export default Login;