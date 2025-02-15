const saludo= require('./index');

test('HolaMundo() debe retornar el Hola mundo',()=>{
    expect(saludo()).toBe("Hola Mundo");
})