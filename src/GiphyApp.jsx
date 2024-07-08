import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiphyApp = () => {

    const [categories, setCategories] = useState([])
    // const [categories, setCategories] = useState(['Ratatouine', 'Batman'])

    const onAddCategory = ( value ) => {
        if (categories.includes( value )) return;
        setCategories( [value, ...categories] );
    }


    return (
        <>
            <h1>Giphy app</h1>    

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
                    : <span>Empieza agregando una categoría..</span>
            }
        </>
    )
}


// const api_key = 'drMsi6w7DcbBdMhn1URZPZXZy9m2aAQb';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
