/* var edad = Math.floor(Math.random() * 100) + 1;

while(edad <= 18){
  if(edad <= 18){
    console.log('Tienes', edad, 'años. Crece un poco más para poder continuar.');
    edad = Math.floor(Math.random() * 100) + 1;
  }
}; */


do{
  edad = Math.floor(Math.random() * 100) + 1;
  console.log(edad <= 18 ? ('Tienes ' + edad + ' años. Crece un poco más para poder continuar.') : ('Bien. Ahora que tienes ' + edad + ' años sí puedes continuar'));
}while(edad <= 18);