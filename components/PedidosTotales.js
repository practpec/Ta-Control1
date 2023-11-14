"use client"
import "/styles/pedidosTotales.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

function PedidosTotalesC() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      try {
        const response = await axios.get("http://localhost:3006/pedidos/");
        setPedidos(response.data.data); 
      } catch (error) {
        console.error("Error al obtener los pedidos ", error);
      }
    };

    getPedidos();
  }, []);

  return (
    <section>
      <Link href="/pedidosTotales/pedidosOpc">
        <div id="pLlevar">
        {Array.isArray(pedidos) && pedidos.length > 0 ? (
          pedidos
            .filter((pedido) => pedido.Tipo.startsWith("Para Llevar"))
            .map((pedido) => (
              <h1 key={pedido.idPedido}>{pedido.Tipo}</h1>
            ))
        ) : (
          <p>Sin pedidos para Llevar</p>
        )}
        </div>
      </Link>
      <Link href="/pedidosTotales/pedidosOpc">
      <div id="mesa">
      {Array.isArray(pedidos) && pedidos.length > 0 ? (
          pedidos
            .filter((pedido) => pedido.Tipo.startsWith("Mesa"))
            .map((pedido) => (
              <h1 key={pedido.idPedido}>{pedido.Tipo}</h1>
            ))
        ) : (
          <p>Sin pedidos en las Mesas</p>
        )}
      </div>
      </Link>
      <Link href="/pedidosTotales/pedidosOpc">
        <button id="btnAgregar">Agregar</button>
      </Link>
    </section>
  );
}

export default PedidosTotalesC;
