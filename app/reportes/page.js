"use client"
import { useState, useEffect } from 'react';
import Tabla from "@/components/Tabla";

export default function Reporte() {
  const [localStorageValue, setLocalStorageValue] = useState(localStorage.getItem("ver"));

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "ver") {
        setLocalStorageValue(e.newValue);
      }
    };

    // Agrega un oyente de eventos para el cambio en localStorage
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  if (localStorageValue === "3") {
    return (
      <div>
        <Tabla/>
      </div>
    );
  }

  return (
    <div>
      <Tabla/>
    </div>
  );
}

