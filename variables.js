// let  - const

// variables

let nombre = "pepito";

console.log(nombre);

const APELLIDO = "Rodriguez";

console.log(APELLIDO); // Es buena practica nombrar las constantes en mayusculas

// Tipo de datos

//String
let nombreDeUsuarios = "Mauri";

//Numerico

let numero = 21;
let precio = 15.5;

// Booleanos

let esMayor = true;

// undefined
let numeros = undefined;

// null

let numero1 = null;

// NaN

console.log(nombre * numero); // NaN

// Operadores

//Matematicos

let n1 = 2;
let n2 = 4;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log(n1 % n2); // modulo - resto de la division

// Backticks ``

console.log(` Hola ${nombre} ${APELLIDO} como estas?`);

function ejemplo(txt) {
  let texto = "Hola, soy una funcion";
  return texto;
}

console.log(ejemplo());

//comparacion

let a = 2;
let b = 5;

console.log(a > b);
