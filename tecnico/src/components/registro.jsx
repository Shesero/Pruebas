import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistro = () => {
    if (!username || !password || !confirmPassword) {
      setError('Por favor, complete todos los campos');
    } else if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
    } else {
      localStorage.setItem('usuario', JSON.stringify({ username, password }));
      setError('');
      console.log('Registro exitoso. Usuario:', username);
      // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
      navigate('/');
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
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
      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegistro}>Registrarse</button>
      <p className="login-link">¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link></p>
    </div>
  );
}

export default Registro;