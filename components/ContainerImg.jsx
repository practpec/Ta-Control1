import Imagenes from "@/components/Imagenes";
export default function ContainerImg({image, altText, width, className}){
    return(
        <div>
            <Imagenes src={image} alt={altText} width={width} className="img1"/>
        {/* <Imagenes src={image} alt={altText} width={width} className="img2"/> */}
        {/* <Imagenes src={src} alt={altText} width={width} className="img3"/> */}
        </div>
    )
}