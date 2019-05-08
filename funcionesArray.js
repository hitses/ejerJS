///////////////////////////////////////////
// FOR EACH

var pueblos = [
  'Villena',
  'Elda',
  'Petrer',
  'Alcoy'
];

function mostrarPueblo (pueblo){
  console.log('Tu pueblo es', pueblo);
}

pueblos.forEach(mostrarPueblo);

console.clear();

///////////////////////////////////////////
// EVERY

var edades = [
  20,
  10,
  30
];

var puedenEntrar = edades.every(function(edad){
  return edad > 18;
})

console.log(puedenEntrar);

console.clear();

///////////////////////////////////////////
// SOME

var dinero = [
  0.2,
  0.4,
  0.1
];

var precioCafe = 0.4;

var puedoPagarCafe = dinero.some(function(dinericos){
  return dinericos >= precioCafe;
})

console.log(puedoPagarCafe);

console.clear();

///////////////////////////////////////////
// SORT

var edades2 = [
  2,
  9,
  127,
  22,
  20,
  10,
  30
];

console.log(edades2.sort());
var ordenador = console.log(edades2.sort(function (a, b){
  return a - b;
}));

console.log(ordenador);