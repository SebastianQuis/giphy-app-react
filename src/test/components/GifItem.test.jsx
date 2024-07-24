import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";

describe('Pruebas en GifItem', () => { 

    const title = 'Saitama';
    const imgUrl = 'https://one-punch.com/saitame.jpg';

    test('funcion GifItem debería arrojar: snapshot', () => { 
        const { container } = render(
            <GifItem imgUrl={imgUrl} title={title}/>
        );
        expect( container ).toMatchSnapshot();
    });



    // screen.debug(); // import react-testing-library

    test('should show the URL and ALT of the image', () => { 
        render( <GifItem imgUrl={imgUrl} title={title}/>);
        const { src, alt } = screen.getByRole('img');
        
        expect( src ).toBe( imgUrl );
        // expect( src ).toContain( "https://" );
        expect( alt ).toBe( title );
    });


    test('should show the title in the component <p> </p>', () => { 
        render( <GifItem imgUrl={imgUrl} title={title}/>);
        expect( screen.getByText(title) ).toBeTruthy();
        
        // TODO - segunda forma
        // const newTitle = screen.getByRole('paragraph').innerHTML;
        // expect( newTitle ).toBe( title );
    })
    
    test('should have the className CARD', () => { 
        render( <GifItem imgUrl={imgUrl} title={title}/>);
        const divElement = screen.getByRole('dialog');
        console.log(`123: ${divElement.className}`);
        
        // expect( divElement.className ).toBe('card');

    })


})