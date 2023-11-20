import "../styles/tablaInventario.css";
import fanta from "../img/Rectangle.png";
import jarritos from "../img/jarritos.png";
import drPepper from "../img/drpepper.png";
import pepsi from "../img/pepsi.png";
import coca from "../img/refresco.png";
import sprite from "../img/sprite.png";
import Link from "next/link";


function TablaInventario(props){
    return(
        <div>
        <table id="tablaInventario">
            <tr>
                <th colSpan="3">
                    <h1 id="tituloTabla">Refrescos</h1>
                </th>
            </tr>

            {/*  Remplazar por un mapeo de todas las imagenes que esten en inventario (las imagenes de todos los refrescos)*/}
            <tr> 
                <td><Link href="/inventario/producto"><img src={fanta.src} alt="fanta" id="fanta" /></Link></td>
                <td><Link href="/inventario/producto"><img src={jarritos.src} alt="jarritos" id="jarritos" /></Link></td>
                <td><Link href="/inventario/producto"><img src={drPepper.src} alt="drPepper" id="drPepper" /></Link></td>
            </tr>

            <tr>
                <td><Link href="/inventario/producto"><img src={pepsi.src} alt="pepsi" id="pepsi" /></Link></td>
                <td><Link href="/inventario/producto"><img src={coca.src} alt="coca" id="coca" /></Link></td>
                <td><Link href="/inventario/producto"><img src={sprite.src} alt="sprite" id="sprite" /></Link></td>
            </tr>
        </table>

        <Link href='/inventario/agregarProducto'><button id="btnAgregar">Agregar</button></Link>
        </div>

    );
}

export default TablaInventario;
