import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('09-test', () => { 

    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 

        getHeroeByIdAsync(1)
            .then(hero =>{
                expect(hero.name).toBe('Batman');
                done();
            })

    })

    test('getHeroeByIdAsync debe retornar un error si heroe no existe', (done) => { 
        const id = 100
        getHeroeByIdAsync(id)
            .then(hero =>{
                expect(hero.id).toBe(id);
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id: ${id}`);
                done();
            })

    })

})