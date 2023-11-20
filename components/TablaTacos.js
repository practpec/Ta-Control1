"use client";
import React, { useState } from "react";
import "../styles/tablaTacos.css";
import jarritos from "../img/jarritos.png";
import drPepper from "../img/drpepper.png";
import pepsi from "../img/pepsi.png";
import coca from "../img/refresco.png";
import sprite from "../img/sprite.png";


const images = [
  { id: "fanta", src: jarritos, alt: "fanta" },
  { id: "jarritos", src: jarritos, alt: "jarritos" },
  { id: "drPepper", src: drPepper, alt: "drPepper" },
  { id: "pepsi", src: pepsi, alt: "pepsi" },
  { id: "coca", src: coca, alt: "coca" },
  { id: "sprite", src: sprite, alt: "sprite" },
];

const TablaTacos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modal, setModal] = useState(false);

  return (
    <div>
        { modal && (
            <div className="modalBackground">
               <div className="modalCard">
                    <div className="cProd">
                        <img src={selectedImage.src} alt="imagen"/>
                        <p>TITULO</p>
                        <p>Precio unitario: $16.00</p>
                        <p>Total: $25.00</p>
                    </div>
                    <div className="btns">
                        <button id="btnCancelar" onClick={()=>setModal(false)}>Cerrar</button>
                        <button id="btnConfirmar" onClick={()=>setModal(false)}>Confirmar</button>
                    </div>
                </div> 
            </div>
        )}
      <table className={".tablaTacos"}>
        {images.length === 0 ? <p>no hay imagenes</p> : images.map((image) => (
          <tr key={image.id}>
            <td>
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => {
                    setModal(true)
                    setSelectedImage(image)
                }}
              />
            </td>
          </tr>
        ))}
      </table>

      <div
        className={`modal fade ${selectedImage ? "show" : ""}`}
        id="miModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        
          
         
       
      </div>
    </div>
  );
};

export default TablaTacos;
