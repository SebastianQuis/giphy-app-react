
import { GifItem } from './GifItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';


export const GifGrid = ( {category} ) => {

  const { data, isLoading } = UseFetchGifs(category);
  console.log(isLoading);

  // TODO - AGREGAR BOTON PARA LIMPIAR EL ARREGLO
  

  return (
    <>
      <h3>{category}</h3>
      
      {/* // TODO - 1RA MANERA */}
      {
        isLoading && (<p>Cargando...</p>)
      }
      <GifItem gifs={ data }></GifItem>

      
      {/* // TODO - 2DA MANERA */}
      {/* {
        ( isLoading ) 
          ? <p>Cargando...</p> 
          : <GifItem gifs={ data }></GifItem>
      } */}
    </>
  )

}

