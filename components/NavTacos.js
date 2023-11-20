import logo from "../img/logoNav.png";
import "../styles/navTacos.css";
import Link from "next/link";

function NavTacos(){
    return(
        <nav>
            <Link href="/pedidosTotales/pedidosOpc"><img src={logo.src} alt="flecha"/></Link>
            <h1>Tacos</h1>
        </nav>
    );
}

export default NavTacos;