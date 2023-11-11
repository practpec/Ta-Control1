"use client"
import NavGen from "@/components/NavGen";
import React, { useEffect } from 'react'
export default function RootLayout({ children }) {
  useEffect(() => {
  localStorage.setItem("ver","0");
  }, []);
  return (
    <div className="container">
        <div className="blanco">
        <NavGen/>
        </div>
      <div className="naranja">{children}</div>
    </div>
  )
}
