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
            <div className="pedido">
               <div className="arriba">
               <select>
                    <option value="mesa1">Mesa 1</option>
                    <option value="mesa2">Mesa 2</option>
                </select>
                
                <button>Para llevar</button>
                </div>
                
                <div id="pedido-container">
                    <p>Taco asada  - 1 +</p>
                    <p>Refresco    - 1 +</p>
                    <p>Quesadilla  - 1 +</p>
                </div>

                <div className="abajo">
                <h1>Total: $36.00 </h1>
                <button id="btnAgregar">Agregar</button>
                </div> 
            </div>

            <button id="btnCancelar"> <Link href="/pedidosTotales">Cancelar</Link></button>
            <button id="btnPagar"> <Link href="/pagar">Pagar</Link></button>
        </section>

    )
}

export default Pedido;