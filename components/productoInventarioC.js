import fanta from "../img/Rectangle.png";
import "../styles/productoInventarioC.css";
import Link from "next/link";

function ProductoInventarioC(){
    return(
        <section>
            {/* Agregar la informacion real de la BD */}
            <div id="producto">
                <img src={fanta.src} alt="producto"/>
                <div id="caractProducto">
                    <h2>
                        Nombre: FANTA
                    </h2>
                    <h2>
                        Cantidad: 3
                    </h2>
                    <h2>
                        Precio: $16.00
                    </h2>
                </div>
            </div>
            <Link href="/inventario/producto/editar"><button>Modificar</button></Link>
        </section> 
    );
}

export default ProductoInventarioC;