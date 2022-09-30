import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('test en 08', () => { 

    test('getHeroeById debe retornar un heroe por id', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual(    {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     })

    test('getHeroeById debe retornar undefined si no existe', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
     })

     test('getHeroesByOwner debe retornar heroes marvel', () => { 


        const heroMarvel = getHeroesByOwner('Marvel');
        //console.log(heroMarvel);
        expect(heroMarvel.length).toBe(2)
        expect(heroMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
    })
    test('getHeroesByOwner debe retornar heroes DC', () => { 

        const heroDC = getHeroesByOwner('DC');
        //.log(heroDC);
        expect(heroDC.length).toBe(3);
        expect(heroDC).toEqual(    [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        
      })
 })

 