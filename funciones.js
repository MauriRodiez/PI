// declaradas vs expresadas

function saludar() {
  let n1 = 2;
  let n2 = 5;

  return n1 + n2;
}

let resultado = saludar();
console.log(resultado);

console.log("---------------- Ejercicios ---------------");

// 1

const CONVERT = (pulgada) => pulgada * 2.54;

let resultado1 = CONVERT(2);
console.log(resultado1);

console.log("-------------------------------");

// 2

const URL = (texto) => "https://www." + texto + ".com.uy";

let txtweb = URL("programando");
console.log(txtweb);

console.log("-------------------------------");

// 3

const FRASE = (txtMensaje) => txtMensaje + "!!";

let resFrase = FRASE("La vida es bella");
console.log(resFrase);

console.log("-------------------------------");

// 4
const EDAD_PERRO = (edad) => edad * 7;

let resEdad = EDAD_PERRO(5);
console.log(resEdad);

console.log("-------------------------------");

// 5

const VALOR_HORA = (salario) => salario / 40 / 8;

let resHora = VALOR_HORA(20000);
console.log(resHora);
