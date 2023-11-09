// components/OrangeRectangle.js
<link href="https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap" rel="stylesheet" />
import React from 'react';
import styles from  '../styles/taco.css'


const TacosRect = () => {
  return (
    <div>
      <button className='boton' id='regreso'>
        <img src='img/regreso.png' id='regreso_img'/>
      </button>
      <div className={styles.text} id='text'>
        Tacos
      </div>     
    <div className="rectangulo">
      <div className="fila">
        <button className="boton">
          <img src='img/taco1.png'/>
        </button>
        <button className="boton">
          <img src='img/taco2.png'/>
        </button>
        <button className="boton">
          <img src='img/taco3.png'/>
        </button>
      </div>
      <div className="fila">
        <button className="boton">
          <img src='img/taco4.png'/>
        </button>
        <button className="boton">
          <img src='img/taco5.png'/>
        </button>
        <button className="boton">
          <img  src='img/taco6.png'/>
        </button>
      </div>
      <div className="fila">
        <button className="boton">Botón 7</button>
        <button className="boton">Botón 8</button>
        <button className="boton">Botón 9</button>
      </div>
    </div>
    </div>
  );
};

export default TacosRect;