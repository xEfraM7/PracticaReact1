import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('11-test', () => { 

    test('la funcion debe retornar el url de la imagen', async() => { 

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
     })

 })