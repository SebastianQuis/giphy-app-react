import { renderHook, waitFor } from "@testing-library/react"
import { UseFetchGifs } from "../../hooks/UseFetchGifs"

describe('Pruebas en UseFetchGifs', () => { 

    test('debe volver un arreglo de images y un boolean del isloading', () => { 
        // renderHook() simula un useHook (fetch data)
        const { result } = renderHook( () => UseFetchGifs('Green') ) 
        
        console.log(result);
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0)
        expect( isLoading ).toBeTruthy()
    })
    
    test('debe de retornar un arreglo de images e isLoading en false', async () => { 
        const { result } = renderHook( () => UseFetchGifs('Green') ) 
        
        // waitFor // esperar una tarea asincrona o un test
        await waitFor(
            () => { expect(result.current.images.length).toBeGreaterThan( 2 )  },
            {
                timeout: 3000,
                interval: 200
            }
        )

        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(2)
        expect( isLoading ).toBeFalsy()
    })

})