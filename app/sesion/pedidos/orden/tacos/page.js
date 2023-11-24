"use client"
import { useEffect, useState } from 'react';
import styles from '@/Styles/Seleccionar.module.css';
import Image from 'next/image';

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3006/productos/')
      .then(response => response.json())
      .then(data => setProductos(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const tacos = productos.filter(producto => producto.tipo === 'Taco');

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.papa}>
      <h1>Tacos</h1>
      <div className={styles.container}>
        {tacos.map(taco => (
          <div key={taco.idProducto} className={styles.card} onClick={() => openModal(taco)}>
            <Image src={taco.imagen} alt={taco.nombre} width={100} height={100} />
            <p>{taco.nombre}</p>
          </div>
        ))}
      </div>

      
      

{selectedProduct && (
  <div className={styles.overlay} onClick={closeModal}>
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.modalContent}>
        <div className={styles.leftContent}>
          <Image src={selectedProduct.imagen} alt={selectedProduct.nombre} width={200} height={200} />
          <div>
            <h2>{selectedProduct.nombre}</h2>
            <p>Precio: $ {selectedProduct.precio}</p>
          </div>
        </div>
        <div className={styles.rightContent}>
  <div className={styles.column}>
    <input type="number" placeholder="Cantidad" />
    <input type="number" placeholder="Aguacate" />
    <input type="number" placeholder="Queso" />
    <input type="number" placeholder="Ambos" />
  </div>
  <div className={styles.buttonContainer}>
    <button onClick={closeModal}>Cancelar</button>
    <button onClick={() => handleAccept(selectedProduct)}>Aceptar</button>
  </div>
</div>
      </div>
    </div>
  </div>
)}



    </div>
  );
}
