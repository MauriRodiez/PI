const binarySearch = (list, item) => {
  // punto mas bajo
  let low = 0;
  // punto mas alto
  let high = list.length - 1;

  // mientras que low sea menor o igual que high
  while (low <= high) {
    // encontramos la mitad entre low y high
    const mid = Math.floor((low + high) / 2);

    // adivinar si el valor es el de la mitad
    const guess = list[mid];

    // si es asi, retornar esa posiciona
    if (guess === item) {
      return mid;
    }
    // si lo propuesto es mayor que lo
    // que estamos buscando
    if (guess > item) {
      //
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null; // si no encontramos nada
};

/*
 // Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Queremos que se familiaricen con la sintaxis del mismo, por lo que no haremos énfasis en los datos, sino en la solución.
Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, 
la propuesta que les hacemos es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo. 
*/

let listA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const busqueda = (array, num) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const medio = Math.floor((min + max) / 2);
    const encontrado = array[medio];

    if (encontrado === num) {
      return `La posicion es ${medio} y el numero encontrado es ${encontrado}`;
    }

    if (encontrado > num) {
      max = medio - 1;
    } else {
      min = medio + 1;
    }
  }

  return "No se encontro el numero";
};

let busquedaBinaria = busqueda(listA, 11);
console.log(busquedaBinaria);

/*
// Desafío extra: Orden, lugar y números
Aumentemos la dificultad un toque, y apliquemos lo aprendido en semanas anteriores. Queremos que hagan lo mismo del ejercicio anterior —buscar la posición de un número en un array—, 
pero partiendo de esta lista:
let list = [12,3,5,7,1,22,47,100];

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
¿Cuál es la posición del número 12?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 22?
¿Cuál es la posición del número 100?
Podrán realizar este ejercicio en un Code Sandbox o Node. Escoger el ambiente en el que se sientan con más comodidad.

*/
let listB = [12, 3, 5, 7, 1, 22, 47, 100];

const listaOrdenada = (arreglo) => {
  let cajaAuxiliar

    for (let i = 0; i < arreglo.length; i++) {
        
        for (let j = 0; j < arreglo.length - 1; j++) {
            if( arreglo[j] > arreglo[j + 1]){
                cajaAuxiliar = arreglo[j] 
                arreglo[j] = arreglo[j + 1] 
                arreglo[j + 1] = cajaAuxiliar
            }
        }

    }
};

listaOrdenada(listB);
console.log(listB);

const busquedaBi = (array, num) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const medio = Math.floor((min + max) / 2);
    const encontrado = array[medio];

    if (encontrado === num) {
      return `La posicion es ${medio} y el numero encontrado es ${encontrado}`;
    }

    if (encontrado > num) {
      max = medio - 1;
    } else {
      min = medio + 1;
    }
  }
};

let buscados = busquedaBi(listB, 100);
console.log(buscados);

// Ejercicio 1

/*Dado un array con los datos de una encuesta realizada sobre los temas musicales
más populares —lo que se tiene en el array son objetos definidos con el nombre de
un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
a) Resolverlo aplicando búsqueda lineal.
b) Resolverlo aplicando búsqueda binaria.*/
