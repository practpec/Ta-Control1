import React from "react";
import Image from "next/image";
import Fanta from '../img/fanta.png';
import Pepsi from '../img/pepsi.png';
import Sprite from '../img/sprite.png'
export default function Imagenes(){
    return(
        <div className="container-images">
          <Image src={Fanta} alt="img" width={200} className="img"/>
          <Image src={Pepsi} alt="img" width={200} className="img"/>
          <Image src={Sprite} alt="img" width={200} height={186.5} className="img"/>
        </div>
    )
}