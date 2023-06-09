
console.log("----- Ejercicio 1 ------");

//Retorno triple

const retornoTriple = numero => { 
    return numero * 3
}

let resultadoTriple = retornoTriple(50)
console.log(`El triple del numero elegido es ${resultadoTriple}`);

// Multiplicacion de ambos

const multiplicaDosNumeros = (numA, numB) => {
    return numA * numB
}

let resultadoMultiplicacion = multiplicaDosNumeros(10,4)
console.log(`El resultado de la multiplicación es ${resultadoMultiplicacion}`);

console.log("----- Ejercicio 2 ------");

let turista = {
    nombre: "Mauricio",
    apellido: "Rodriguez",
    temperatura: 36
}

const accesoComercio = (persona) =>{
    
    if(persona.temperatura < 37){
        return "Puede pasar"
    }else if(persona.temperatura > 37){
        return "No puede pasar"
    }

}

let accesoTurista = accesoComercio(turista)
console.log(`La persona ${accesoTurista}`);

console.log("-------- Ejercicio 3 -------------");

let paises =  [{
    cantidadDeVisitas: 3,
    clima: 'soleado',
    habitantes: '212 millones'
  },
  {  
     cantidadDeVisitas: 4,
     clima: 'frío',
     habitantes: '144 millones'
  },
  {
    cantidadDeVisitas: 1,
    clima: 'nublado',
    habitantes: '329 millones'
  }]

// Parte A

const siguienteViaje = array => {
    for (let i = 0; i < array.length; i++) {
        array[i].cantidadDeVisitas += 1       
    }
}

// Antes de incrementar
console.log(paises);
console.log("-----------------------------");
siguienteViaje(paises)
// Cantidad de visitas incrementadas
console.log(paises);

