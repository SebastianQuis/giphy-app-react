
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( {category} ) => {
  
  const [gifs, setGifs] = useState([]);

  const getImages = async() => {
    const allGifs = await getGifs( category );
    setGifs(allGifs);
  }

  useEffect( () => {
    getImages();
  }, []) // arreglo de dependencias.
  

  return (
    <> 
      <ol>
        {
          gifs.map( gif => {
            <li key={gif.id}>{gif.title}</li>
          })
        }
      </ol>
    </>
  )

}
