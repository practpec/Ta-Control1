import "/styles/pedidosTotales.css"
import Link from "next/link";

function PedidosTotalesC(){
    return(
        <section>
            <Link href="/pedidosTotales/pedidosOpc"><div id="pLlevar">
                <h1>Para llevar 1</h1>
                <h1>Para llevar 2</h1>
            </div></Link>
            <div id="mesa">
                <h1>Mesa 1</h1>
                <h1>Mesa 2</h1>

            </div>

            <Link href="/pedidosTotales/pedidosOpc"><button id="btnAgregar">Agregar</button></Link>
        </section>
    )
}

export default PedidosTotalesC;