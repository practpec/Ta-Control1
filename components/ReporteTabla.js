"use client"
import "../styles/reporteTabla.css"
export default function Tabla(){
 
    return(
        <div> 
            <div className="repB">
                <button>
                    Diario
                </button>
                <button>
                Semanal
                </button>
            </div>

           <table className="mi-tabla">
          <thead>
            <tr>
              <th>Menu</th>
              <th>Precio de C/U</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Taco </td>
              <td>$ 10</td>
              <td>60</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Refresco </td>
              <td>$ 20</td>
              <td>20</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Taco </td>
              <td>$ 10</td>
              <td>60</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Refresco </td>
              <td>$ 20</td>
              <td>20</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Taco </td>
              <td>$ 10</td>
              <td>60</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Refresco </td>
              <td>$ 20</td>
              <td>20</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Taco </td>
              <td>$ 10</td>
              <td>60</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Refresco </td>
              <td>$ 20</td>
              <td>20</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Taco </td>
              <td>$ 10</td>
              <td>60</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Refresco </td>
              <td>$ 20</td>
              <td>20</td>
              <td>$400</td>
            </tr>
          
          </tbody>
        </table>
        </div>
    );
}