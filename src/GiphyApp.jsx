import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GiphyApp = () => {

    const [categories, setCategories] = useState([])
    // const [categories, setCategories] = useState(['Ratatouine', 'Batman'])


    // TODO - HACER PRUEBA DE ONADDCATEGORY
    // TODO - SI ES LA MISMA CATEGORIA CREADA
    const onAddCategory = ( value ) => {
        if (categories.includes( value )) {
            alert('Categoría ya creada.');
            return;
        };
        setCategories( [value, ...categories] );
    }


    return (
        <>
            <h2>GIPHY</h2>

            <AddCategory 
                onNewCategory = { (value) => onAddCategory(value) } 
            />
            
            {
                categories.length > 0
                    ? categories.map( category => 
                        <GifGrid
                            key={category}
                            category={category}
                        />)
                    : <p>Empieza agregando una categoría..</p>
            }
        </>
    )
}


