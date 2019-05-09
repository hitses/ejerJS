/* Triángulo con bucles for anidados */

var filas = 7;

for(var altura = 1; altura <= filas; altura++){
  var cadena = [];
  for(var blancos = 1; blancos <= filas - altura; blancos++){
    cadena += " ";
  };
  for(var asteriscos = 1; asteriscos <= (altura * 2) - 1; asteriscos++){
    cadena += "*";
  };
  console.log(cadena);
};