<link href="https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap" rel="stylesheet" />
import React from 'react';
import styles from  '../styles/quezadilla.css'


const quezadilla = () => {
  return (
    <div>
      <button className='boton' id='regreso'>
        <img src='img/regreso.png' id='regreso_img'/>
      </button>
      <div className={styles.text} id='text'>
        Quezadilla
      </div>     
    <div className="rectangulo">
      <div className="fila">
        <button className="boton">
          <img src='img/quesadilla1.png'/>
        </button>
        <button className="boton">
          <img src='img/quesadilla2.png'/>
        </button>
        <button className="boton">
          <img src='img/quesadilla3.png'/>
        </button>
      </div>
      <div className="fila">
        <button className="boton">
          <img src='img/quesadilla4.png'/>
        </button>
        <button className="boton">
          <img src='img/quesadilla5.png'/>
        </button>
        <button className="boton">
          <img  src='img/quesadilla6.png'/>
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

export default quezadilla;