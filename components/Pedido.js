import "../styles/pedido.css"
import Link from "next/link";
import taco from "../img/taco.png";
import quesadilla from "../img/quesadilla.png";
import refresco from "../img/refresco.png";

function Pedido(){
    return(
        <section>
            <div className="pedidoOpc">
                 <Link href="/pedidosTotales/pedidosOpc/tacos"><div id="opcTacos">
                    <img src={taco.src}/>
                    <h2>Tacos</h2>
                </div></Link>

                <Link href="/pedidosTotales/pedidosOpc/quesadillas"><div id="opcQuesadillas">
                    <img src={quesadilla.src}/>
                    <h2>Quesadillas</h2>
                </div></Link>

                <Link href="/pedidosTotales/pedidosOpc/refrescos"><div id="opcRefrescos">
                    <img src={refresco.src}/>
                    <h2>Refrescos</h2>
                </div></Link>
            </div>

            {/* En pedido va la info de la BD */}
            <div className="pB">
                <div className="pedido">
                <div className="arriba">
                    {/* Aqui van todos los pedidos registrados */}
                <select>
                        <option value="mesa1">Mesa 1</option>
                        <option value="mesa2">Mesa 2</option>
                    </select>
                    
                    <button>Para llevar</button>
                    </div>
                    
                    {/*En pedido-container va la info del pedido */}
                    <div id="pedido-container">
                        <p>Taco asada  - 1 +</p>
                        <p>Refresco    - 1 +</p>
                        <p>Quesadilla  - 1 +</p>
                    </div>

                    {/* En abajo se pone el total de la cuenta y al picar agregar se guarda el pedido */}
                    <div className="abajo">
                    <h1>Total: $36.00 </h1>
                    <Link href="/pedidosTotales"><button id="btnAgregar">Agregar</button></Link>
                    </div> 
                </div>
                    {/* Cuando pica cancelar el pedido no se guarda y pagar manda a pagar */}
                        <button id="btnCancelar"> <Link href="/pedidosTotales">Cancelar</Link></button>
                        <button id="btnPagar"> <Link href="/pagar">Pagar</Link></button>
            </div>
        </section> 

    )
}

export default Pedido;