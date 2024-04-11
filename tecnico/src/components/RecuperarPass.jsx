import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecuperarPass.css';

function PasswordRecovery() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordRecovery = () => {
    // Aquí puedes agregar la lógica para enviar un correo electrónico al usuario con un enlace para restablecer la contraseña
    // Por ahora, simplemente mostramos un mensaje de éxito
    setSuccessMessage('Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña.');
  };

  return (
    <div className="password-recovery-container">
      <h2>Recuperar Contraseña</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {!successMessage && (
        <>
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            placeholder="Nombre de Usuario o Correo Electrónico"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
          <button onClick={handlePasswordRecovery}>Recuperar Contraseña</button>
        </>
      )}
      <p className="login-link">¿Recordó su contraseña? <Link to="/">Inicie sesion</Link></p>
    </div>
  );
}

export default PasswordRecovery;