import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { UseFetchGifs } from '../hooks/UseFetchGifs';


export const GifGrid = ( {category} ) => {

  const { images, isLoading } = UseFetchGifs(category);

  // TODO - AGREGAR BOTON PARA LIMPIAR EL ARREGLO
  

  return (
    <>
      { isLoading && ( <h2>Cargando...</h2> ) }
      
      <div className="card-grid" role='dialog'>
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


GifGrid.propTypes = { 
  category: PropTypes.string.isRequired
}

