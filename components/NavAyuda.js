import logoNav from "/img/logoNav.png"
import Link from "next/link";
import "../styles/navAyuda.css"

function NavAyuda() {
    return (
        <nav>
          <Link href="/pedidosTotales"><img src={logoNav.src} alt="Ta-control" id="logoNav" /></Link>
        </nav>
    );
}
export default NavAyuda;
