"use client";
import "/styles/navGen.css"
import Link from "next/link";
import logoNav from "/img/logoNav.png";
import pedidos from "/img/pedidos.png";
import inventario from "/img/inventario.png";
import reporteVentas from "/img/reporteVentas.png";
import cerrarSesion from "/img/cerrarSesion.png";
import help from "/img/help.png";
import basura from "/img/trash.png";


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

                <div className="iconNav">
                <Link href="/">
                    <img src={cerrarSesion.src} alt="Cerrar sesión" id="cerrarSesion"/>
                </Link>

                <Link href="/" >
                    <img src={basura.src} alt="Ayuda" id="help"/>
                </Link>

                <Link href="/ayuda">
                    <img src={help.src} alt="Ayuda" id="help"/>
                </Link>
            </div>
        </nav>
    );
}

export default NavGen;

  