
import { GifItem } from './GifItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';


export const GifGrid = ( {category} ) => {

  const { images, isLoading } = UseFetchGifs(category);

  // TODO - AGREGAR BOTON PARA LIMPIAR EL ARREGLO
  

  return (
    <>
      { isLoading && ( <h2>Cargando...</h2> ) }
      
      <div className="card-grid">
        { images.map( ( image ) => (
          <GifItem 
            key={ image.id } 
            { ...image }
          />
        ))}
      </div>
    </>
  )

}

