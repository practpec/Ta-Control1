import logo from "../img/logoNav.png";
import "../styles/navQuesadillas.css";
import Link from "next/link";

function NavQuesadillas(){
    return(
        <nav>
            <Link href="/pedidosTotales/pedidosOpc"><img src={logo.src} alt="flecha"/></Link>
            <h1>Quesadillas</h1>
        </nav>
    );
}

export default NavQuesadillas;