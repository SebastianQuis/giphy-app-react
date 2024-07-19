import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const UseFetchGifs = (category = '') => {
    
    const [gifs, setGifs] = useState({
        data: [],
        isLoading: true,
    });

    const { data, isLoading} = gifs;

    const getImages = async() => {
        const allGifs = await getGifs( category );
        setGifs({
            data: allGifs,
            isLoading: false
        });
    }


    useEffect( () => {
        getImages();
    }, []) // arreglo de dependencias.
  
    
    return {
        data,
        isLoading
    }
}
