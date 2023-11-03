'use client';
import "@/Styles/Navbar.css";
import { useState } from 'react'
import Image from "next/image";
import cerrar from "@/img/cerrar.png"
import logo from "@/img/logo.png"
import pedido from "@/img/pedido.png"
import inventario from "@/img/inventario.png"
import reporte from "@/img/reporte.png";
export default function Navbar() {

    const [botonActivo, setBotonActivo] = useState(null);

    const handleButtonClick = (id) => {
      setBotonActivo(id);
      localStorage.setItem("ver",id);
      location.reload();
    };
    return(
    < >
      <div className="logo">
      <Image src={logo} className="logo2"/>
        Ta-Control
      </div>
      <div className="contbotones">
      <button
        className={`boton ${botonActivo === 1 ? 'presionado' : ''}`}
        onClick={() => handleButtonClick(1)}
      >
        <Image src={pedido} className="comp"/>
        Pedidos
      </button>
      <button
        className={`boton ${botonActivo === 2 ? 'presionado' : ''}`}
        onClick={() => handleButtonClick(2)}
      >
        <Image src={inventario} className="comp"/>
        Inventario
      </button>
      <button
        className={`boton ${botonActivo === 3 ? 'presionado' : ''}`}
        onClick={() => handleButtonClick(3)}
      >
        <Image src={reporte} className="comp"/>
        Reporte de ventas
      </button></div>
      <button className="cerrar">
      <Image src={cerrar} className="imagen"/>
        Cerrar sesión
      </button>
  </>
    )
}