// funcion bar

let accesoBar = edad => {
    
    let impar = edad%2 != 0 ? "¿Sabias que tu edad es impar?" : "";

    if (edad <= 0) {
        return "Por favor ingrese un numero valido!";
    } else if (edad < 21) {
        return "Puede pasar al bar pero no tomar alcohol!" + " " + impar;
    } else if(edad === 21) {
        return "Te damos la bienvenida, felicitaciones por la mayoria de edad!" + " " + impar;
    }else{
        return "Puede pasar y tomar alcohol!"
    }
    
}

let puerta = accesoBar(20); 
console.log(puerta);

console.log("----------------------------------------");

// Total a pagar

const totalAPagar = (vehiculo, litrosConsumidos) => {

    let cochePPL = 86;
    let motoPPL = 70;
    let autobusPPL = 55;

    if (vehiculo == "coche" && litrosConsumidos <= 25) {
        return cochePPL * litrosConsumidos + 50;
    } else if (vehiculo == "coche" && litrosConsumidos > 25) {
        return cochePPL * litrosConsumidos + 25;
    } else if (vehiculo == "moto" && litrosConsumidos < 25) {
        return motoPPL * litrosConsumidos + 50;
    } else if (vehiculo == "moto" && litrosConsumidos > 25) {
        return motoPPL * litrosConsumidos + 25;
    } else if (vehiculo == "autobus" && litrosConsumidos < 25) {
        return autobusPPL * litrosConsumidos + 50;
    } else if (vehiculo == "autobus" && litrosConsumidos > 25) {
        return autobusPPL * litrosConsumidos + 25;
    } else {
        return "No es posible registrar esa cantidad"
    }

}

let consumo = totalAPagar("coche", 28);
console.log(consumo);

let consumo1 = totalAPagar("moto", 28);
console.log(consumo1);

let consumo2 = totalAPagar("autobus", 28);
console.log(consumo2);

console.log("-----------------------");

// Local de Sandiches

// Arrays

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];

let fraseNueva = arrayFrase.join(" ");
console.log(fraseNueva);

// otro - push
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push(
    {
      nombre: 'Juan',
      pomedio: 5,
      curso: 'iOS'
    }
  );
  
  estudiantes.push(
    {
      nombre: 'Miguel',
      pomedio: 2,
      curso: 'Android'
    }
  );

  console.log(estudiantes)

  let texto = "La vida es un y hay que vivirla";

function txtlargo(txt){
    return txt.length;
}

let resultado = txtlargo(texto);
console.log(resultado);

//Ejercicio de modificar una funcion de un objeto
const deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantidadHoras){
        this.energia = this.energia - (cantidadHoras *5);
        this.experiencia = this.experiencia +(cantidadHoras *2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

//////////////////////////////////////////////////////////////////////////

// ¿Cual es el numero secreto?

const numSecreto = numero => {

  let secret = Math.floor(Math.random() * 11)

  if (numero === secret) {
      return `El numero secreto es: ${secret} y tu elegiste el numero ${numero}. 
      Felicidades, has acetado el numero secreto`
  } else{
    return `El numero secreto es: ${secret} y tu elegiste el numero ${numero}.
    No te desanimes, puedes volver a intentarlo`
  }

}

let resultadoSecreto = numSecreto(0)
console.log(resultadoSecreto)

////////////////////////////////////////////////////////////////////////////

// Abrir paracaidas (datos: velocidad < 1000km/h y altura >= 2000 y < 3000 m)

const abirParacaidas = (velocidad, altura) => {

  if (velocidad < 1000 && altura >= 2000 && altura< 3000) {
    return "El paracaidas puede abirse"
  } else {
    return "No es posible abrir el paracaidas"
  }

}

let salto = abirParacaidas(1500, 2100)
console.log(salto)

//////////////////////////////////////////////////////////////////////////////

// Switch

const traductor = palabra => {

  switch (palabra) {
    case "casa":
      return "house"
      break
    case "perro":
      return "dog"
      break  
    case "pelota":
      return "ball"
      break
    case "arbol":
      return "tree"
      break
    case "genio":
      return "genius"
      break  
    default:
      return "La palaba ingresada es incorrecta"
      break;
  }
  return palabra
}

let traduccion = traductor("arbol")
console.log(traduccion)

////////////////////////////////////////////////////////////////

// VALORACION DE PELICULAS

const valoracion = valor => {

  switch(valor){

    case 0:
      return "Calificaste la pelicula como Muy mala, lo lamentamos mucho!"
      break
    case 1:
      return "Calificaste la pelicula como mala, lo lamentamos mucho!"
      break
    case 2:
      return "Calificaste la pelicula como mediocre, lo lamentamos mucho!"
      break
    case 3:
      return "Calificaste la pelicula como buena, Nos alegra!"
      break
    case 4:
      return "Calificaste la pelicula como muy buena, Nos alegra mucho!"
      break
    case 5:
      return "Calificaste la pelicula como excelente, Superamos las expectativas!"
      break
    default:
      return "Ingresaste un valor invalido"
      break
  }

}

let pelicula = valoracion(6)
console.log(pelicula);

///////////////////////////////////////////////////////////////////////////////////

// MAS EJERCICIOS

// 1

const frase = texto => {
  return texto
}

let textoUsuario = frase("Que tal amigo?")
console.log(textoUsuario);

// 2

const saludo = nombre => {

  return `Hola ${nombre}!!`

}

let hola = saludo("Jose")
console.log(hola);

// 3

const suma = (num1, num2) => {

  return num1 + num2

}

let resultadoSuma = suma(2, 6)
console.log(resultadoSuma);

// 4

const edad = anio => {

  return `Tienes ${anio - 2023} años`

}

let edadActual = edad(2011)
console.log(edadActual);

// 6

  let par = 0
  for(let i = 0; i <= 100; i++){

    par = i%2 == 0 ? console.log(i) : "es impar";
    
  }

  // 7

  const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"]

  for(let i =0; i < nombres.length; i++){

    console.log(nombres[i]);

  }

  // 8

  const pseudo = numero => {

    let calculo = numero > 500 ? numero * 0.18 : numero

    return calculo

  }

  let resultadoPseudo = pseudo(7000)
  console.log(resultadoPseudo);


  // 9 

  const arreglo = cuenta => {

    if(cuenta.length > 3){
      return cuenta[2]
    }else{
      return -1
    }

  }

  let resultadoArray = arreglo([2,13])
  console.log(resultadoArray);

  // 10

  const dosCifras = numero => {

    if(numero < 10){
      return `Faltan ${numero-10} para llegar a ser un numero de dos cifras`
    }else if(numero >= 10 && numero < 100){
      return `Faltan ${numero-100} para llegar a ser un numero de tres cifras`
    }

  }

  let resultado2cifras = dosCifras(19)
  console.log(resultado2cifras);

  // 11

  let N = 3

  const promedio = (n1, n2, n3) => {

    return (n1 + n2 + n3) / N

  }

  let resultPromedio = promedio(5,10,9)
  console.log(resultPromedio);

  // 12
  let numero = 10
  let result = 0

  for(let i = 0; i < numero; i++){
      result += i
      console.log(result);
  }

  //////////////////////////////////////////////////////////////////////

  // ARRAYS

  // 1

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]

console.log(peliculas);
console.log("----------------------------");
// 2

const convertMayusculas = (arr) => {
  let arrUp = []
  for(let i = 0; i < arr.length; i++){
    arrUp.push(arr[i].toUpperCase())    
  }
  return arrUp
}

let peliculasUpper = convertMayusculas(peliculas)
console.log(peliculasUpper);
console.log("----------------------------");
// 3

let peliculasAnimadas = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"]

console.log(peliculasAnimadas);

const peliculasUnidas = (peli, animada) => {

  let array = []

 for(let i = 0; i < 5; i++){
  let union = peli.shift(peli[i])
  array.push(union)  
  /*for(let i = 0; i < 5; i++){
  let paso = animada.shift(animada[i])
  array.push(paso)
}*/
 }
 for(let i = 0; i < 5; i++){
  let paso = animada.shift(animada[i])
  array.push(paso)
}
 
array = convertMayusculas(array)

 return array 

}


let unidas = peliculasUnidas(peliculas, peliculasAnimadas)
console.log(unidas);
console.log("----------------------------");
// 4 

let juego = unidas.pop()
console.log(juego)
console.log("----------------------------");
// 5

const asiaScores =[8,10,6,9,10,6,6,8,4];
const euroScores = [8,10,6,8,10,6,7,9,5];

const comparaValoracion = (arr, arr1) => {

  let compa = 0;
  let compa1 = 0;
  let comparacion = "";

  for (let i = 0; i < arr.length; i++) {
        compa = arr[i]
        compa1 = arr1[i]

        if(compa === compa1){
          comparacion = `El numero de la posicion ${arr[i]} es igual el numero de ${arr1[i]}` 
          console.log(comparacion)
        }else{
          comparacion = `El numero de la posicion ${arr[i]} es diferente el numero de ${arr1[i]}`
          console.log(comparacion)
        }
        
  }

}

let resultadoComparaciones = comparaValoracion(asiaScores, euroScores)
console.log(resultadoComparaciones);