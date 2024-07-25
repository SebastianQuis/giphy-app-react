import { getGifs } from '../../helpers/getGifs';


describe('Pruebas en getGifs()', () => { 



    test('funcion getGifs debería retornar: un []', async () => { 
        const gifs = await getGifs('green')

        // expect( gifs.length ).toBeGreaterThan( 0 );
        // expect( gifs.length ).toBe( 5 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            imgUrl: expect.any(String),
        });
    })

})


