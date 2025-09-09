import foto1 from '../assets/gato1.jpg'
import foto2 from '../assets/gato2.jpg'
import foto3 from '../assets/gato3.jpg'
import foto4 from '../assets/gato4.jpg'
import Rate from './rate'
import {useState} from "react"; 

function Galeria() {
    const [images, setImages] = useState([ //arreglo de objetos, cambiara los valores cada q se modifique
        { id: 1, src: foto1, rate: 0 },
        { id: 2, src: foto2, rate: 0 },
        { id: 3, src: foto3, rate: 0 },
        { id: 4, src: foto4, rate: 0 },
    ]);

    const ordenaImagenes = (index, rate) => { //se necesita saber q imagen calificas y su calificacion, por eso el index y rate
        const imagenesOrdenadas = [...images]
        imagenesOrdenadas[index].rate = rate
        imagenesOrdenadas.sort((a,b)=>b.rate - a.rate)
        setImages(imagenesOrdenadas)

    }

    const promedio = () => { //sacar el promedio de las imagenes hecho por chatgpt
    const total = images.reduce((sum, img) => sum + img.rate, 0);
    const average = images.length > 0 ? total / images.length : 0;
    console.log('Promedio:', average.toFixed(2));
    };

    return ( 
        <>
            <div className="galeria">
                {images.map((img, i) => <div className="scoreCard" key={img.id}> <img src={img.src} alt="imagen" className='imagen' /> {/*key={img.id} hace que se cambie el rate de mayor a menor*/}
                        <Rate avisaCambio={ordenaImagenes} index={i}/>
                       
                    </div>
                )}
                 
            </div>

<div className='boton'><button className="button" onClick={promedio}> 𝓹𝓻𝓸𝓶𝓮𝓭𝓲𝓸 ₍^. .^₎⟆ </button></div>

        </>
    )
}


export default Galeria
