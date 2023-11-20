import fanta from "../img/Rectangle.png";
import "../styles/editar.css";
import Link from "next/link";

function EditarC(){
    return(
        <section>
            {/* Agregar la informacion real de la BD y revisar codigo */}
            <div id="producto">
                <img src={fanta.src} alt="producto"/>
                <form id="caractProducto">
                    <label for="nombre">Nombre: </label>
                    <input type="text" placeholder="Nombre"/>
                    <label for="cantidad">Cantidad: </label>
                    <input type="text" placeholder="Cantidad"/>
                    <label for="precio">Precio: </label>
                    <input type="text" placeholder="Precio"/>
                </form>
            </div>
            <Link href="/inventario/producto"><button>Confirmar</button></Link>
        </section>
    );
}

export default EditarC;