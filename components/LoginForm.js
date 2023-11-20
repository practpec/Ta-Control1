"use client";

import React, { useState } from 'react';
import styles from '../styles/LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError('Por favor, ingresa correo y contraseña.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    const data = {
      email: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3006/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        setError('');
      } else {
        console.error('Error al iniciar sesión');
        setError('Credenciales inválidas. Por favor, verifica tus datos.');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setError('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.h}>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Nombre de usuario (correo electrónico)"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>
          Iniciar sesión
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;