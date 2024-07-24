
import React from 'react'

import PropTypes from 'prop-types';



export const GifItem = ( { title, imgUrl } ) => {
    
    return (
        <div className="card" role='dialog'>
            <img src={ imgUrl } alt={ title } />
            <p>{ title }</p>
        </div>
    )

}


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}

// GifItem.defaultProps = {
//     title: '',
//     imgUrl: '',
// }

