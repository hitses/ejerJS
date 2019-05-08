do{
  edad = Math.floor(Math.random() * 100) + 1;
  console.log(edad <= 18 ? ('Tienes ' + edad + ' años. Crece un poco más para poder continuar.') : ('Bien. Ahora que tienes ' + edad + ' años sí puedes continuar'));
}while(edad <= 18);