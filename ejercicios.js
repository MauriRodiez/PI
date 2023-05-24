// Ciclos

/*Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
    La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/

let loro = (texto) => {
  for (let i = 0; i < 5; i++) {
    console.log(texto);
  }
};

/*    En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. 
  Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. 
  Para resolver la ejercitación debemos utilizar el for .*/

function noParesDeContarImparesHasta(numero) {
  // Escribe aqui tu código
  let contadorImpares = 0;

  for (let i = 0; i < numero; i++) {
    if (i % 2 != 0) {
      contadorImpares++;
    }
  }
  return console.log(contadorImpares);
}

//let result = noParesDeContarImparesHasta(10);
//console.log("Hay " + result + " numeros impares");
//console.log(noParesDeContarImparesHasta(4));
//noParesDeContarImparesHasta(4);

// Ejercicio Puede pasar o no al bar

const accesoBar = (edad) => {
  if (edad <= 0) {
    return "Numero invalido";
  }

  let impar = edad% 2 != 0 ? "Sabias que tu edad es impar?" : "";

  if (edad > 18 && impar) {
    return "No puede pasar al bar";
  } else if (edad == 21 && impar) {
    return "Bienvenido, Felicitaciones por haber llegado a la mayoria de edad";
  } else if (edad > 21 && impar) {
    return "Puede pasar al bar, pero no puede tomar alohol";
  } else {
    return "Puede pasar al bar y tomar alcohol";
  }
}

let bar = accesoBar(20);
console.log(bar);
