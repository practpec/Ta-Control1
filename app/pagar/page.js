import "@/Styles/Pagar.css"

export default function Pagar(){
    return(
        <div className="container">
            <div className="uno">
                <h1>Para llevar 1</h1>
                <button className="cancelar">Cancelar</button>
                <button className="pagar">Pagado</button>
            </div>
            <div className="dos">
                <div className="nota">
                <table className="no-borders-table">
      <thead>
        <tr>
          <th>Taco</th>
          <th>Cantidad</th>
          <th>Precio c/u</th>
          <th>Aguacate</th>
          <th>Queso</th>
          <th>Ambos</th>
          <th>Precio x Extra</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pastor</td>
          <td>6</td>
          <td>$ 10</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>$ 30</td>
          <td>$ 90</td>
        </tr>
      
      </tbody>
    </table>
    <table className="no-borders-table">
      <thead>
        <tr>
          <th>Refresco</th>
          <th>Cantidad</th>
          <th>Precio c/u</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coca-Cola</td>
          <td>2</td>
          <td>$ 20</td>
          <td>$40</td>
        </tr>
      
      </tbody>
    </table>
    <p className="total">
        Total : $ 130
    </p>
                </div>
            </div>
        </div>
    )
}