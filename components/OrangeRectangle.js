// components/OrangeRectangle.js
<link href="https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap" rel="stylesheet" />
import React from 'react';
import LoginForm from '../components/LoginForm';
import styles from '../styles/OrangeRectangle.module.css';

const OrangeRectangle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangle}>
   
        <img src="img/logo 1.png" alt="Imagen" className={styles.image} />
        <div className={styles.text}>
        Ta-control
      </div>     
      </div>  
      <div className={styles.rightContent}>
        <LoginForm/>
      </div>
    </div>
  );
};

export default OrangeRectangle;