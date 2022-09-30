describe('prueba en demo component', () => { 
    test('test',() => {

        //1. Inicializacion
    
        const message1 = 'Hola Mundo';
    
        //2.estimulo
    
        const message2 = message1.trim();
    
        //3.observacion del comportamiento esperado
    
        expect(message1).toBe(message2);
    
    })
 })

