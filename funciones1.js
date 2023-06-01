// 1_ Pasar de pulgadas a centimetros

const CONVERT_CM = pulgadas => pulgadas * 2.54;

let resultadoCM = CONVERT_CM(2);
//console.log(resultadoCM);
console.log("---------------------------------------------");

// 2_ Recibe string y convierte en url

const CONVERT_URL = word => "https://www." + word + ".com";

let resultado_URL = CONVERT_URL("pepito");
//console.log(resultado_URL);
console.log("---------------------------------------------");


// 3_ Recibe string y lo devuelve con admiracion

const CONVERT_AD = text => text + "!";

let resultado_AD = CONVERT_AD("La vida es bella");
//console.log(resultado_AD);
console.log("---------------------------------------------");

// 4_ Calcular edad de perros

const EDAD_PERROS = edad => edad * 7;

let perrosEdad = EDAD_PERROS(7);
//console.log(perrosEdad);
console.log("---------------------------------------------");

// 5_ Valor hora de trabajo

const VALOR_HORA = salario => salario / 40;

let valorHora = VALOR_HORA(25000);
//console.log(valorHora);
console.log("---------------------------------------------");

// 6_ CALCULAR IMC

const IMC = (peso, altura) => peso / (altura * altura);

let indiceMC = IMC(72, 1.70);
//console.log(indiceMC);
console.log("---------------------------------------------");

// 7_ Funcion que retone un sting a mayuscula

const MAYUSCULA = textoUP => textoUP.toUpperCase();

let upper = MAYUSCULA("Esto es una cosa de locos");
//console.log(upper);
console.log("---------------------------------------------");

// 8_ tipo de dato

const DATO = tipoDato => typeof(tipoDato);

let resultDato = DATO(true);
//console.log(resultDato);
console.log("---------------------------------------------");

// 9_ Calcular circunferencia

const CIRCUNFERENCIA = radio => 2 * Math.PI * radio;

let resCircunferencia = CIRCUNFERENCIA(6);
//console.log(resCircunferencia);
console.log("---------------------------------------------");

//console.log("Gato" && "Perro");

console.log("---------------------------------------------");

function noParesDeContarImparesHasta(numero){
    // Escribe aqui tu código
    let contadorImpares = 0;

    for(let i = 0; i < numero; i++){
        if(i%2 != 0){
           contadorImpares++; 
        }
    }
    return contadorImpares;
}

let result = noParesDeContarImparesHasta(10);
//console.log("Hay " + result + " numeros impares");

console.log("---------------------------------------------");

// tABLA DE MULTIPLICAR
function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí 
    let multiplo = 0;
    let tabla;
    
    while (multiplo <= 10) {
        let resultado = numero * multiplo;
        tabla = numero + " x " + multiplo + " = " + resultado;
        console.log(tabla);
        multiplo++
    }
    return tabla;
}

let resTabla = tablaDeMultiplicar(5);
//console.log(resTabla);
