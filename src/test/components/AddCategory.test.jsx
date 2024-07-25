import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components"

describe('Pruebas en <AddCategory/>', () => { 

    test('debe obtener un valor como categoria', () => { 
        render( <AddCategory onNewCategory={() => {}} /> );
        const input = screen.getByRole('textbox'); // obtener input
        
        fireEvent.input( input, { target: { value: 'Green' }} )
        expect( input.value ).toBe( 'Green' );

    })

})


