import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components"

describe('Pruebas en <AddCategory/>', () => { 

    test('debe cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={() => {}} /> );
        const input = screen.getByRole('textbox'); // obtener input
        
        fireEvent.input( input, { target: { value: 'Green' }} )
        expect( input.value ).toBe( 'Green' );
    })

    
    test('debe llamar el onNewCategory si el input tiene valor', () => { 
        
        const inputValue = 'green';
        const onNewCategory = jest.fn(); // simulando una funcion 

        render( <AddCategory onNewCategory={ onNewCategory }/> )

        const input = screen.getByRole('textbox')
        const form  = screen.getByRole('form')

        fireEvent.input( input, { target: {value: inputValue} } )
        fireEvent.submit(form)
        expect( input.value ).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
    })

    test('no debe llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn(); // simulando una funcion 
        
        render( <AddCategory onNewCategory={ onNewCategory }/> )
        
        const form  = screen.getByRole('form')
        fireEvent.submit(form)

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();
    })

})


