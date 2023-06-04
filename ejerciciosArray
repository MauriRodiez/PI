// Coleccion de peliculas

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
let peliculasAnimadas = [
  "toy story",
  "finding nemo",
  "kung fu panda",
  "wally",
  "fortnite",
];

const mayusculas = (arrayString) => {
  let arrUP = [];

  for (let i = 0; i < arrayString.length; i++) {
    arrUP.push(arrayString[i].toUpperCase());
  }

  return arrUP;
};

let pelieliminada = peliculasAnimadas.pop();
pelieliminada;

const unionPeliculas = (arrayUno, arrayDos) => {
  for (let i = 0; i < arrayDos.length; i++) {
    arrayUno.push(mayusculas(arrayDos)[i]);
  }

  return arrayUno;
};

let peliculasUppercase = mayusculas(peliculas);
console.log(peliculasUppercase);

let pelisUnidas = unionPeliculas(peliculasUppercase, peliculasAnimadas);
console.log(pelisUnidas);

////////////////////////////////////////////////////////////////////////////////

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const calificacionesComparadas = (arrayUno, arrayDos) => {
  let valoracion = "";
  let info = [];

  for (let i = 0; i < arrayUno.length; i++) {
    if (arrayUno[i] === arrayDos[i]) {
      valoracion = `En la posicion ${i} la calificacion es la misma`;
      info.push(valoracion);
    }
  }
  return info;
};

let resultado = calificacionesComparadas(asiaScores, euroScores);
console.log(resultado);

/////////////////////////////////////////////////////////////////////////////////

// Array invertido

let numeros = [1, 2, 3, 4, 5];

const imprimirInverso = (arrayMuestra) => {
  let largo = arrayMuestra.length;
  let invertido = [];

  for (let i = 0; i < largo; i++) {
    let extraido = arrayMuestra.pop();
    invertido.push(extraido);
  }
  return invertido;
};

let numerosInvertidos = imprimirInverso(numeros);
console.log(numerosInvertidos);

const inversor = (arrayInvertido) => {
  let largo = arrayInvertido.length;
  let alReves = [];

  for (let i = 0; i < largo; i++) {
    let extraido = arrayInvertido.pop();
    alReves.push(extraido);
  }

  return alReves;
};

let deVuelta = inversor(numerosInvertidos);
console.log(deVuelta);

///////////////////////////////////////////////////////////////////////////////////////////

let prueba = [1, 2, 3];

// Suma Array
const sumaArray = (numeros) => {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    suma;
  }
  return suma;
};

let resultadoSuma = sumaArray(prueba);
console.log(resultadoSuma);

///////////////////////////////////////////////////////////////////////////////////////////

// Simulacion Array.join()

let hola = ["H", "o", "l", "a"];

const join = (arrayLetras) => {
  let joinTxt = [];

  for (let i = 0; i < arrayLetras.length; i++) {
    let guardado = arrayLetras[i];
    joinTxt += guardado;
  }

  return joinTxt;
};

let union = join(hola);
console.log(union);
