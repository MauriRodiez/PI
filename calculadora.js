// Sumar
const SUMA = (a, b) => a + b;

// Restar
const RESTA = (a, b) => a - b;

// Multiplicacion
const MULTIPLICAR = (a, b) => a * b;

// Division
const DIVIDIR = (a, b) => a / b;

// Cuadrado de un numero
const CUADRADO = (numero) => MULTIPLICAR(numero, numero);

// PromedioDeTresNumeros
const promedioDeTresNumeros = (num1, num2, num3) => {
  let firstPlus = SUMA(num1, num2);
  let secondPlus = SUMA(firstPlus, num3);
  return DIVIDIR(secondPlus, 3);
};

// calculasPorcentaje
const calcularPorcentaje = (num, percent) => {
  let multiplica = MULTIPLICAR(num, percent);
  return DIVIDIR(multiplica, 100);
};

// GeneradorDePorcentaje
const generadorDePorcentaje = (percent, num) => {
  let multiplica = MULTIPLICAR(percent, 100);
  return DIVIDIR(multiplica, num);
};

console.log("----- Testeo de operaciones / Calculadora ------");
console.log("--------- Suma ----------");
let sumar = SUMA(4, 8);
console.log(`El resultado de la suma es ${sumar}`);

console.log("--------- Resta ----------");
let restar = RESTA(16, 8);
console.log(`El resultado de la resta es ${restar}`);

console.log("--------- Multiplicacion ----------");
let multiplicacion = MULTIPLICAR(4, 6);
console.log(`el resultado de la multiplicación es ${multiplicacion}`);

console.log("--------- Division ----------");
let division = DIVIDIR(78, 4);
console.log(`El resultado de la división es ${division}`);

let divisionCero = DIVIDIR(10, 0);
console.log(`El resultado de la división es ${divisionCero}`);

console.log("--------- Cuadrado de un numero ----------");
let alCuadrado = CUADRADO(3);
console.log(`El resultado al cuadrado es ${alCuadrado}`);

console.log("--------- Promedio de tres numeros ----------");
let promedio = promedioDeTresNumeros(9, 3, 6);
console.log(`El resultado del promedio de tres numeros es ${promedio}`);

console.log("--------- Calcular porcentaje ----------");
let porcentaje = calcularPorcentaje(300, 15);
console.log(`El porcentaje es ${porcentaje}`);

console.log("--------- Generador de porcentaje ----------");
let generador = generadorDePorcentaje(2, 200);
console.log(`El porcentaje es: ${generador}`);
