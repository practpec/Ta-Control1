import '@/Styles/Reporte.css'
import Image from 'next/image'
import Fanta from '../../img/fanta.png'
import '@/Styles/DescripcionP.css';

export default function Pagar(){
    return(
        <div className='container'>
            <div className='cont-group'>
                <div className='image-container'>
                    <Image src={Fanta} alt='' width={200} className="img"/>
                </div>
                <div className='lbl-nombre'>
                    <label>Nombre: 
                        <input className='nombre' placeholder=' Nombre del producto'></input>
                    </label>
                    
                    <label>Cantidad: 
                        <input className='nombre' placeholder=' Nombre del producto'></input>
                    </label>
                </div>
            </div>
            
        </div>
    )
}