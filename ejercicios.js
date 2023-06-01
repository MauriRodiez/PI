////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// Funciones ///////////////////////////////////////////////////////////////

// Ejercicio Puede pasar o no al bar

const accesoBar = (edad) => {
  if (edad <= 0) {
    return "Numero invalido";
  }

  let impar = edad % 2 != 0 ? "Sabias que tu edad es impar?" : "";

  if (edad > 18 && impar) {
    return "No puede pasar al bar" + " " + impar;
  } else if (edad === 21) {
    return (
      "Bienvenido, Felicitaciones por haber llegado a la mayoria de edad" +
      " " +
      impar
    );
  } else if (edad > 21) {
    return "Puede pasar al bar, pero no puede tomar alohol" + " " + impar;
  } else {
    return "Puede pasar al bar y tomar alcohol";
  }
};

let bar = accesoBar(21);
console.log(bar);

console.log("-----------------------");

////////////// Local de Sandwiches

const localSandwich = (sand, pan, ad1, ad2, ad3, ad4, ad5, ad6) => {
  let costoSand = 0;
  let costoPan = 0;

  switch (sand) {
    case "pollo":
      costoSand = 150;
      break;
    case "carne":
      costoSand = 200;
      break;
    case "veggie":
      costoSand = 100;
      break;
    default:
      costoSand = 0;
  }

  switch (pan) {
    case "blanco":
      costoPan = 50;
      break;
    case "negro":
      costoPan = 60;
      break;
    case "gluten":
      costoPan = 75;
      break;
    default:
      costoPan = 0;
      break;
  }

  let costoFinal = costoSand + costoPan;
  let costoQueso = ad1 ? (costoFinal += 20) : 0;
  let costoTomate = ad2 ? (costoFinal += 15) : 0;
  let costoLechuga = ad3 ? (costoFinal += 10) : 0;
  let costoCebolla = ad4 ? (costoFinal += 15) : 0;
  let costoMayonesa = ad5 ? (costoFinal += 5) : 0;
  let costoMostaza = ad6 ? (costoFinal += 5) : 0;

  return costoFinal;
};

let pedido = localSandwich(
  "pollo",
  "blanco",
  true,
  true,
  false,
  true,
  false,
  true
);
console.log(pedido);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////// Ciclos //////////////////////////////////////////////////////////////////

/*Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
    La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/

let loro = (texto) => {
  for (let i = 0; i < 5; i++) {
    console.log(texto);
  }
};

/******************* En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
  Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 
  Para resolver la ejercitación debemos utilizar el for .*********************************************************/

function noParesDeContarImparesHasta(numero) {
  // Escribe aqui tu código
  let contadorImpares = 0;

  for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
      contadorImpares++;
    }
  }
  return contadorImpares;
}

let result = noParesDeContarImparesHasta(10);
console.log("Hay " + result + " numeros impares");
console.log(noParesDeContarImparesHasta(4));

/////////////////////////////// 1 - funcion que dado un parametro muestre los 10 numeros siguientes

const numeroSiguiente = (numero) => {
  for (let i = numero; i <= numero + 10; i++) {
    console.log(i);
  }
};
let resultadoNumeros = numeroSiguiente(20);

//////////////////////////////// 2 - Imprimir numeros de del 5 al 20 saltando de a 3

for (let i = 5; i <= 20; i += 3) {
  console.log(i);
}

//////////////////////////////// 3 - sumatotia de todos los numeros del 0 al 100

let contador = 0;

for (let i = 0; i <= 100; i++) {
  contador += i;
  console.log(contador);
}

//////////////////////////////// 4 - factorial - de un numero

const factorial = (numero) => {
  let numFactorial = 1;

  for (let i = 1; i <= numero; i++) {
    numFactorial *= i;
    console.log(numFactorial);
  }

  return numFactorial;
};

let prueba = factorial(10);
console.log(prueba);

///////////////////////////////// 5 - Secuencia de fibonacci
let a = 0;
let b = 1;
console.log(a);
console.log(b);

const fibonacci = (numero) => {
  for (let i = 0; i < numero; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};

let testFibo = fibonacci(10);

// 1- Algoritmo para convertir una cantidad de pesos a dolares
// 2- Algoritmo que calcule el salario de un empleado, si se descuenta el 20% de su salario
// 3- Hacer un programa para calcular el promedio de 3 notas, si el promedio es mayor o igual que 7 = aprobado sino desaprobado
// 4- Elaborar un programa que simule una clave de acceso:
// -> Si el usuario es Admin y la clave es 123456 mostrar el mensaje acceso permitido sino acceso denegado
// 5-  Elaborar un programa que muestre la cantidad de numeros pares entre dos numeros.
// 6- Elaborar un programa que permita ingresar un numero entero del 1 y 10 y muestre la tabla de multiplicar de ese numero.
// 7-
