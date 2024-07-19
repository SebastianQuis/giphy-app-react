
import React from 'react'

export const GifItem = ( {gifs = []} ) => {
  
    return (
        <div className='card-grid'>
            {
                gifs.map( ( {id, title, imgUrl} ) => (
                    // <p key={id}> {title} </p>
                    <img src={imgUrl} key={id} alt='title'/>
                ))
            }
        </div>    
    )
}

