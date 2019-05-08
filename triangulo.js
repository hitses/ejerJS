/* Triángulo con bucles for anidados */

for(var i = 0; i < 10; i+=2){
  var cadena = [];
  for(var j = 1; j < i; j++){
    cadena += '*';
  }
  console.log(cadena);
};