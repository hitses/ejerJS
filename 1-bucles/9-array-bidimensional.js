
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [];
let lista1 = []; 
let lista2 = []; 
let lista3 = []; 

for (let i = 0; i < 1; i++){
  for (let j = 0; j <= 2; j++){
    lista1.push(`${i}${j}`);
    console.log(lista1);
  }
};


for (let i = 1; i < 2; i++){
  for (let j = 0; j <= 2; j++){
    lista2.push(`${i}${j}`);
    console.log(lista2);
  }
};

for (let i = 2; i < 3; i++){
  for (let j = 0; j <= 2; j++){
    lista3.push(`${i}${j}`);
    console.log(lista3);
  }
};

matriz.push(lista1, lista2, lista3);
console.log(matriz);

/* let matriz = [
    [],
    [],
    []
] */
