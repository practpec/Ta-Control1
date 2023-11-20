import logo from "../img/logoNav.png";
import "../styles/navRefrescos.css";
import Link from "next/link";

function NavRefrescos(){
    return(
        <nav>
            <Link href="/pedidosTotales/pedidosOpc"><img src={logo.src} alt="flecha"/></Link>
            <h1>Refrescos</h1>
        </nav>
    );
}

export default NavRefrescos;