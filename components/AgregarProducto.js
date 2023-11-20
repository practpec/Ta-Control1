import "../styles/agregarProducto"
import Link from "next/link";


function AgregarProductoC(){
    return(
        <section>
            {/* Agregar la informacion real de la BD y revisar codigo */}
            <div id="producto">
                    <label for="nombre">Imagen: </label>
                    <input type="file" accept="image/*" placeholder="Img"/>
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

export default AgregarProductoC;