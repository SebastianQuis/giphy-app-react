import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onGiphyChanged = ( event ) => {
        // console.log( `ONCHANGED: ${event.target.value}` );
        setInputValue( event.target.value );
    }

    const onSubmitGphy = ( event ) => {
        event.preventDefault();
        if (inputValue.trim().length < 2) {
            alert('Tiene que ingresar más de 1 caracter');
            return;
        };
        onNewCategory( inputValue.trim() )
        setInputValue(''); 
    }

    return (
        <form onSubmit={ onSubmitGphy }>
            <input 
                type="text" 
                placeholder='Buscar gif'
                value={ inputValue } 
                onChange={ onGiphyChanged }
            />
        </form>
    )
}




