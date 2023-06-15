

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

const llenarMatriz = () => {
    let matriz = []
    let num = 0
    for (let i = 0; i < 5; i++) {
            matriz[i] = []
            for (let j = 0; j < 5; j++) {
                matriz[i][j] = Math.floor(Math.random() * 10)                
            }    
    }
    return matriz
}

let matrizCompleta = llenarMatriz()
//console.log(matrizCompleta);
//console.table(matrizCompleta);


/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const sumaMatriz = (matrix) => {

    let comodin = 0
    for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                comodin += matrix[i][j]         
            }
    }
    return comodin
}

let resultadoSuma = sumaMatriz(llenarMatriz())
//console.log(resultadoSuma);   



// Cear una funcion que genere una matiz de 10x10. Cada fila debe tener solo 10 numeros.

const matrix10 = (x,y) =>{

    let acc = 1
    let matriz = []

    for (let i = 0; i < x; i++) {        
        matriz[i] = []
        for (let j = 0; j < y; j++) {
            matriz[i][j] = acc
            acc++
        }
    }
    return matriz
}

let resultado = matrix10(10,10)
//console.log(resultado);
//console.table(resultado);

// Generar dos funciones para sumar los valores en diagonal de la matriz de 10 x 10
// debe dar 505

const sumaDiagonal = (matrix) => {
    let acc = 0
    for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i] === matrix[j]){
                    acc += matrix[i][j]
                }                
            }    
    }
    return acc
}

console.log("---------------------------");
let resultadoSumaDiagonal = sumaDiagonal(matrix10(10,10))
console.log(resultadoSumaDiagonal)
console.log("---------------------------");

const sumaDiagonalInversa = (matrix) => {
    let acc = 0
    for (let i = matrix.length-1; i > 0 ; i--) {
            for (let j = matrix[i].length; j > 0; j++) {
                if(matrix[i] === matrix[j]){
                    acc += matrix[i][j]
                }                
            }    
    }
    return acc
}

let resultadoSumaDiagonalInversa = sumaDiagonalInversa(matrix10(10,10))
console.log(resultadoSumaDiagonalInversa)

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

