import "/styles/navGen.css"
import Link from "next/link";
import logoNav from "/img/logoNav.png";
import pedidos from "/img/pedidos.png";
import inventario from "/img/inventario.png";
import reporteVentas from "/img/reporteVentas.png";
import cerrarSesion from "/img/cerrarSesion.png";

function NavGen() {
    return (
        <nav>
            <img src={logoNav.src} alt="Logo" id="logoNav" />

                <div className="opcNav">

                <Link href="/pedidosTotales"><div id="pedidos">
                        <img src={pedidos.src} alt="Pedidos" />
                        <h2>Pedidos</h2>
                    </div></Link>

                <Link href="/inventario"><div id="inventario">
                        <img src={inventario.src} alt="Inventario" />
                        <h2>Inventario</h2>
                    </div></Link>
                    
                <Link href="/reporteVentas"><div id="reporteVentas">
                        <img src={reporteVentas.src} alt="Reporte de ventas" />
                        <h2>Reporte de ventas</h2>
                    </div></Link>
                </div>

                <div id="cerrarSesion">
                    <img src={cerrarSesion.src} alt="Cerrar sesión" />
                    <h2>Cerrar sesión</h2>
                </div>
        </nav>
    );
}
export default NavGen;

  