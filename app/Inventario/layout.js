"use client"
import "@/Styles/Reporte.css"
import Navbar from "@/components/navbar"
import React, { useEffect } from 'react'
export default function RootLayout({ children }) {
  useEffect(() => {
  localStorage.setItem("ver","0");
  }, []);
  return (
    <div className="container">
        <div className="blanco">
        {/* <Navbar/> */}
        </div>
      <div className="naranja">{children}</div>
    </div>
  )
}