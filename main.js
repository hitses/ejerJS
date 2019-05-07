/* Ejercicio 1 */
/* console.log('Bucle for que muestra por consola los números del 4 al 9, ambos inclusive');
for (var i = 4; i < 10; i++) {
  console.log(i);
} */

/* Ejercicio 2 */
/* console.log('Bucle for que muestra por consola los impares del 3 al 17 inclusive');
for (var i = 3; i < 18; i+=2) {
  console.log(i);
} */

/* Ejercicio 3 */
/* console.log('Bucle for que muestra por consola la tabla del 7');
for (var i = 0; i < 11; i++) {
  console.log(7*i);
} */

/* Ejercicio 4 */
/* var gente = [{
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
]
var mayores = [];
console.log('Dado un array, muestra a la gente mayor de 25 años.')
for (var i = 0;i < gente.length;i++){
  console.log(i);
  if (gente[i].edad > 25){
    mayores.push(gente[i].nombre);
  }
}
console.log(mayores); */

/* Ejercicio 5 */
/* var gente = [{
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
  nombre: 'Jerónimo',
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
]
var mayores = [];
console.log('Dado un array, muestra a la gente que su nombre empiece por J.')
for (var i = 0;i < gente.length;i++){
  console.log(i);
  if (gente[i].nombre[0] == 'J'){
    mayores.push(gente[i].nombre);
  }
}
console.log(mayores); */

/* Ejercicio 6 */
/* var gente = [{
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
  nombre: 'Jerónimo',
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
]
var mayores = [];
console.log('Dado un array, muestra a la gente cuyo nombre sea de 4 letras.')
for (var i = 0;i < gente.length;i++){
  console.log(i);
  if (gente[i].nombre.length == 4){
    mayores.push(gente[i].nombre);
  }
}
console.log(mayores);
 */
/* Ejercicio 7 */
/* var gente = [{
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
  nombre: 'Jerónimo',
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
]
var mayores = [];
console.log('Dado un array, muestra a la gente cuyo nombre empieza por J y sean menores de 40 años.')
for (var i = 0;i < gente.length;i++){
  console.log(i);
  if (gente[i].nombre[0] == 'J' && gente[i].edad < 40){
    mayores.push(gente[i].nombre);
  }
}
console.log(mayores); */

/* Ejercicio 8 */
/* for(var i = 0; i < 101; i++){
  if(i % 3 == 0 && i % 5 == 0){
    console.log('GEEKSHUBS');
  }else if(i % 5 == 0){
    console.log('HUBS');
  }else if(i % 3 == 0){
    console.log('GEEKS');
  }else{
    console.log(i);
  }
}
 */
/* Ejercicio 9 */
/* var zero = [];
var one = [];
var two = [];
var tre = [];

for(var i = 0; i <= 2; i++){
  for(var j = 0; j <= 2; j++){
    if (i == 0){
      one.push(i, j);
    }else if(i == 1){
      two.push(i, j);
    }else if(i == 2){
      tre.push(i, j);
    }
  }
}
zero = [one, two, tre];
console.log(zero);
 */
/////////////////////////////////////////////////////////////
//  1
/* Crea un objecto en la variable ordenador
de tal modo que el siguiente código no muestre por consola 'suspendes' */


// Aquí tu código
/* 
var ordenador = {
  marca: 'La pava',
  tipo: 'portátil',
  perifericos: [
    'ratón',
    'touchPad',
  ],
  almacenamiento: {
    discos: [
      'SSD',
      'HDD',
    ],
    maestro: 0,
  },
};

// Hasta aquí

// TEST 1
if (typeof ordenador === 'object') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 2
if (ordenador.marca === 'La pava') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 3
if (ordenador.tipo === 'portátil') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 4
if (ordenador.perifericos[1] === 'touchPad') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 5
if (ordenador['almacenamiento']['discos'][1] === 'HDD') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 7
if (ordenador.almacenamiento.discos[ordenador.almacenamiento.maestro] === 'SSD') {
  console.log('apruebas');
  
} else {
  console.log('suspendes');
} */

//////////////////////////////
/* console.log('Cambio a test 2.') */
////////////////////////////// 
//  2
//  Crea un objecto en la variable llamada obj
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código
/* 
var obj = {
  a: {
    b: true,
    c: [
      'word',
      22,
    ],
  },
  d: 6,
  f: 'Jero',
};

// Hasta aquí

// TEST 1
if (typeof obj === 'object') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 2
if (typeof obj.a.b === 'boolean') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 3
if (typeof obj.a.c[1] === 'number') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 4
if (typeof obj.d === 'number') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 5
if ( obj.d > 4 && obj.d < 8) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 6
if (typeof obj.f === 'string') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 6
if ( obj.f.length === 4) {
  console.log('apruebas');
} else {
  console.log('suspendes');
} */

//////////////////////////////
/* console.log('Cambio a test 3.') */
////////////////////////////// 
//  3
//  Crea un array en la variable llamada arr
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código
/* 
var arr = [
  {
    name: 'pepito',
    age: 25,
  },
  {
    name: 'pepito',
    age: 23,
  },
  {
    name: 'Jero',
    age: 22,
  },
];

// Hasta aquí

// TEST 1
if (typeof arr === 'object' && arr.length >= 0) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 2
if (typeof arr[0] === 'object') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 3
if (typeof arr[1] === 'object') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 4
if (typeof arr[2] === 'object') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 5
if (arr.length === 3) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 6
if (arr[0].name === arr[1].name) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 6
if (arr[1].name === 'pepito') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 7
if (arr[1].age > arr[2].age) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 8
if (arr[0].age === 25) {
  console.log('apruebas');
} else {
  console.log('suspendes');
}
// TEST 9
if (typeof arr[2].name === 'string') {
  console.log('apruebas');
} else {
  console.log('suspendes');
}

// TEST 10
if (arr[2].name[0] === 'J') {
  console.log('apruebas');
} else {
  console.log('suspendes');
} */

//////////////////////////////
/* console.log('Test número 4') */
//////////////////////////////
//  4
//  Crea una variable llamada acronimo 
//  que sea tipo string 
//  y tenga la primera letra de cada item del array llamado frase
//  de tal modo que el siguiente código no muestre por consola 'suspendes'
/* 
let frase = Math.random() > 0.5 ? ['unite', 'states', 'america'] : ['aeropuertos', 'Españoles', 'Navegación', 'Aérea']

console.log('El array frase es: ', frase);
// Aquí tu código

var acronimo = '';
for (var i = 0; i < frase.length; i++){
  acronimo = acronimo + frase[i][0];
}
acronimo = acronimo.toUpperCase();

// Hasta aquí
console.log('El string acronimo es: ', acronimo);

// TEST 1
if (typeof acronimo === 'string') {
    console.log('apruebas');
} else {
    console.log('suspendes:  El acronimo debe ser un string');
}

// TEST 2
if (acronimo.toUpperCase() === 'USA' || acronimo.toUpperCase() === 'AENA') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 3
if (acronimo === 'USA' || acronimo === 'AENA') {
    console.log('apruebas');
} else {
    console.log('suspendes, El Acronimo debe ser en mayúsculas');
} */

//////////////////////////////
/* console.log('Test número 5'); */
////////////////////////////// 
//  5
//  Queremos saber cuanto suman todos los items del array arr
//  Crea un variable llamada total que sea de tipo number,
//  donde almacenar cuanto suman todos los items de array arr.
//  En cada ejecución arr será distinto pero sus item siempre serán tipo 'number'
//  ejemplo: arr = [1,3,4] ;  total = 8
//  de tal modo que el siguiente código no muestre por consola 'suspendes'

//  PISTA: utilizad un bucle for of

/* let giveMeIntegerRandom = max => Math.round(Math.random() * max) + 1;
let arr = [];
for (let i = 0; i < giveMeIntegerRandom(10); i++) {
    arr[i] = giveMeIntegerRandom(4)
}
console.log('El array original es:  arr =', arr);

// Aquí tu código

var total = 0;

// Hasta aquí
console.log('El total nuevo es: ', total);

// TEST 1
if (typeof total === 'number') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 2
if (total >= arr.length) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

// TEST 3
if (arr.reduce((i, t) => i + t) === total) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
//////////////////////////////////////// */
console.clear();
/* Triángulo con bucles for anidados */

for(var i = 1; i < 10; i++){
  var cadena = [];
  for(var j = 1; j < i; j++){
    cadena += '*';
  }
  console.log(cadena);
};

console.clear();

function square(number){
  return number * number;
};

function puedoEntrar(edad){
  if(edad < 18){
    return false;
  }else{
    return true;
  }
};

function puedoEntrar2(edad){
  if (edad < 18){
    return false;
  }
  return true;
}

function puedoEntrar3(edad){
  return edad >= 18;
};

var puedoEntrar4 = function(edad){
  return edad >= 18;
};


console.log(puedoEntrar(22));
console.log(puedoEntrar2(22));
console.log(puedoEntrar3(22));
console.log(puedoEntrar4(22));

console.clear();

function puedenEntrar(){
  return arguments[0] >= 18;
}

var puedo = puedenEntrar(19);
console.log(puedo ? 'Sí' : 'No');

console.clear();

function puedenEntrar2(){
  for (edad of arguments){
    if (edad < 18){
      return false;
    }
  };
  return true;
};

console.log(puedenEntrar2(21, 32, 24));

console.clear();

function mostrarHora(nombre, edad){
  console.log(nombre, edad, new Date());
};

/* var id = setInterval(mostrarHora, 1000 * 2, 'Jero', 28);
setTimeout(clearInterval, 1000 * 4, id); */

console.log(escape('hola mundo'));

/* var operacion = prompt('Dame una operación:');
var resultado = eval(operacion);
alert('El resultado de ' + operacion + ' es ' + resultado); */

console.log(isFinite(1/0));

console.log(isNaN(2/'Jero'));