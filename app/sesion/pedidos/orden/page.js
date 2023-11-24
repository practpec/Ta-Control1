"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import styles from "@/styles/Pedido.module.css"; // Importa estilos como módulo

function Pedido() {
  const [idMesas, setIdMesas] = useState('');

  useEffect(() => {
    const storedIdMesas = localStorage.getItem('idMesas');

    if (storedIdMesas) {
      setIdMesas(storedIdMesas);
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.pB}>
        <div className={styles.pedido}>
          <div className={styles.arriba}>
            <p>{idMesas}</p>
          </div>
          
          <div id="pedido-container" className={styles.pedidoContainer}>
            <p>Taco asada  - 1 +</p>
            <p>Refresco    - 1 +</p>
            <p>Quesadilla  - 1 +</p>
          </div>

          <div className={styles.abajo}>
            <h1>Total: $36.00 </h1>
            <Link href="/pedidosTotales"><button id="btnAgregar" className={styles.btnAgregar}>Agregar</button></Link>
          </div> 
        </div>

        <button id="btnCancelar" className={styles.btnCancelar}> <Link href="/pedidosTotales">Cancelar</Link></button>
        <button id="btnPagar" className={styles.btnPagar}> <Link href="/pagar">Pagar</Link></button>
      </div>
    </section>
  );
}

export default Pedido;

