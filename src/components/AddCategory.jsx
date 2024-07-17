import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onGiphyChanged = ( event ) => {
        // console.log( `ONCHANGED: ${event.target.value}` );
        setInputValue( event.target.value );
    }

    const onSubmitGphy = ( event ) => {
        event.preventDefault(); // FUNCIONAMIENTO BÁSICO
        if (inputValue.trim().length < 2) {
            alert('Tiene que ingresar más de 1 caracter');
            return;
        };
        onNewCategory( inputValue.trim() ) 
        setInputValue(''); // LIMPIANDO VALOR DE INPUT
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




