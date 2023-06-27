// 1- FILTRAR LOS PRODUCTO QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// y RETORNARLO

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtroProductos = (array) => {
  let filtrados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].stock < 10) {
      filtrados.push(array[i]);
    }
  }
  return filtrados;
};

let resultado = filtroProductos(items);
console.log(resultado);

// 2-  Incrementar EN 1 EL STOCK DE CADA PRODUCTO

let items2 = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const incrementoStock = array => {
    
    for (let i = 0; i < array.length; i++) {
        array[i].stock += 1        
    }
}

incrementoStock(items)
console.log(items);

// 3A - TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE
let edades = [43, 12, 1, 5, 32, 56, 7];

const ordenDescendente = array => {
    let x;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] < array[j + 1]){
                x = array[j]
                array[j] = array[j + 1]
                array[j + 1] = x
                }            
            }    
        }
    }

ordenDescendente(edades)
console.log(edades);

// 3B - TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 17,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 1,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];

const ordenAscendente = array => {
    let auxiliar;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j].stock > array[j + 1].stock){
            auxiliar = array[j]
            array[j] = array[j + 1]
            array[j + 1] = auxiliar
            }            
        }        
    }
}

ordenAscendente(productos)
console.log(productos);

// 4 - TODO CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// con TODOS LOS ELEMENTOS DE LA FILA 1 (multiplicados x 3)

let matriz = [
  [2, 4, 3],
  [3, 1, 5, 7, 1, 8], // [9, 3, 15]
  [8, 4, 9],
];

const multiplicoPorTres = array => {

    let arregloMultiplicado = []
    for(let i = 0; i < array[1].length; i++){
        arregloMultiplicado.push(array[1][i] * 3)
    }
    return arregloMultiplicado
}

let filaMultiplicada = multiplicoPorTres(matriz)
console.log(filaMultiplicada);
console.table(filaMultiplicada);
// 5 - TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// la COLUMNA 0, POR UN STRING QUE DIGA "hola"

const palabra = array => {
    for (let i = 0; i < array.length; i++) {
        array[i][0] = 'Hola';        
    }
}

palabra(matriz)
console.table(matriz);

// 6 - CAMBIAR TODOS LOS ELEMENTOS IMPARES DE LA MATRIZ POR SU NEGATIVO

const matrizImpar = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(array[i][j] % 2 !== 0){ 
            array[i][j] *= -1 
            }           
        }        
    }
}

matrizImpar(matriz)
console.table(matriz);


// 7 - CREAR UNA FUNCION QUE RETORNE EL TOTAL DE LA SUMA DE LA DIAGONAL SECUNDARIA


let matrizD = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
  ];

const diagonalSecundaria = array => {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i][array.length -1 - i]   
    }

    return suma

}


let sumaDiagonal = diagonalSecundaria(matrizD)
console.log(sumaDiagonal)

