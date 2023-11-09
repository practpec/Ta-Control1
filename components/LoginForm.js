// components/LoginForm.js

import React from 'react';
import styles from '../styles/LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <h2 className={styles.h}>Iniciar sesión</h2>
      <form>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Nombre de usuario" className={styles.input} />
          <input type="password" placeholder="Contraseña" className={styles.input} />
        </div>
        <button type="submit" className={styles.button}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
