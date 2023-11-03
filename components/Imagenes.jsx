import React from "react";
import Image from "next/image";
import Fanta from '../img/fanta.png';
import '@/Styles/Imagenes.css'

export default function Imagenes(){
    return(
        <div className="container-images">
            <Image src={Fanta} alt='' width={200} className="img"/>
        </div>
    )
}