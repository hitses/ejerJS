// ej 7
// crea un array con la gente que su nombre
// empieza por J y sean menores de 40 años
// utilizando el método filter de los arrays
// y muéstralo por consola.


let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
    {
        nombre: 'Jero',
        edad: 28
    },
]

let losQuePasan = gente.filter(function(persona){
    return persona.edad <= 40 && persona.nombre[0] == 'J';
  });
  
let nombres = losQuePasan.map(function(persona){
    if (persona.edad <= 40 && persona.nombre[0] == 'J'){
    return persona.nombre;
    }
})

console.log(nombres.join(' '));