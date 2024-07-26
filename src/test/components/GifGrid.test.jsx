import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components"
import { UseFetchGifs } from "../../hooks/UseFetchGifs"



// simulando UseFetchGifs (usehook) dentro de GIFGRID (fetch)
jest.mock('../../hooks/UseFetchGifs');


describe('Pruebas en GifGrid', () => { 

    // test('debe de mostrar el loading inicialmente', () => { 
    //     render( <GifGrid category="green"/> ) 
        
    //     expect( screen.getByText( 'Cargando...' ) )
    //     expect( screen.getByRole( 'dialog' ).className  ).toBe( 'card-grid' )
    // })
    
    
    test('deben cargarse las imagenes en items', () => { 
        
        const gifs = [
            {
                id: '123',
                title: 'my title',
                imgUrl: 'https://mytitle.jpg'
            },
            {
                id: '123',
                title: 'my title',
                imgUrl: 'https://mytitle.jpg'
            },
        ]

        UseFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false, // true
        })

        render( <GifGrid category="green"/> ) 
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2)
        // expect( screen.getByText('Cargando...') )
    })

})