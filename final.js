// Ejercicio 1: 
// Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020.

console.log("------------------------- Ejercicio 1 ----------------------------");

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]

const filtroModelo = arrAutos => {

    let modeloFiiltrado = []

    for (let i = 0; i < arrAutos.length; i++) {
            if(arrAutos[i].modelo >= 2020){
                modeloFiiltrado.push(arrAutos[i])
            }    
    }

    return modeloFiiltrado

}

let filtrado = filtroModelo(autos)
console.log(filtrado);

console.log("------------------------- Ejercicio 2 ----------------------------");

// Ejercicio 2:
// Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio.

let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenaNotas = arrNotas => {
    
    let box;

    for (let i = 0; i < arrNotas.length; i++) {
        for (let j = 0; j < arrNotas.length -1; j++) {
            if(arrNotas[j].notaPromedio < arrNotas[j + 1].notaPromedio){
                box = arrNotas[j];
                arrNotas[j] = arrNotas[j + 1];
                arrNotas[j + 1] = box;
            }            
        }
    }

}

ordenaNotas(estudiantes)
console.log(estudiantes);



console.log("------------------------- Ejercicio 3 ----------------------------");

//Ejercicio 3:
// 1: Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
//    La función debe retornar un arreglo con todos los elementos  de esa columna.
// 2: Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares de la matriz por un número 0 (cero)


let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]

console.log("Parte 1");

const datosSeleccionados = (matriz, pos) => {

    let columna = []

    for (let i = 0; i < matriz.length; i++) {
        columna.push(matriz[i][pos])      
    }

    return columna

}

let datosColumna = datosSeleccionados(matrix, 1)
console.log(datosColumna);

console.log("Parte 2");

const modificarImpares = matriz => {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] % 2 !== 0){
                console.log(matriz[i][j]);
                matriz[i][j] = 0;               
            }            
        }        
    }

}

modificarImpares(matrix)
console.log(matrix)
console.table(matrix)