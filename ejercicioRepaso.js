/* 
1)Las personas encargadas del backend nos enviaron una lista de productos pero 
    se olvidaron de asignarles un ID unico para cada producto,
    nuestra tarea es agregarles ese ID unico a cada uno
    Requisito: debe empezar en 1 y ser secuencial 
2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
    si se venden todos los productos que tenemos en stock
3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
    X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)
4) Por ultimo debemos crear una funcion para poder aumentar el precio de una categoria
    especifica que recibiremos por parametros y tambien recibiremos por cuanto queremos
    multiplicar dicho precio
*/


// Loop de pares - de 0 a 100

const loopDePares =  numero => {

    
    for(let i = 0; i <= 100; i++){

        if((i + numero)%2 === 0 && numero + i < 100){
            console.log (`El numero ${numero + i} es par`)
        } else{
            console.log(i)
        }
        
    }
}

loopDePares(31)

// loop de impares con palabra

const loopDeImpares = (numero, palabra) => {

    for (let i = 0; i <= 100; i++) {
        
        console.log(i);
        
        if((numero + i)%2 !== 0 && numero + i < 100){
                console.log(`El numero es ${numero + i} y dice ${palabra}`);
        }

    }

}

loopDeImpares(12, "hola")

// Sumatoria

const sumatoria = numero => {
    let suma = 0
    for(let i = 0; i <= numero; i++){
        suma += i
    }
    return suma
}

let resultado = sumatoria(4)
console.log(resultado);

// Nuevo arreglo - Crear una funcion que recibe un numero y devuelve un arreglo con la cantidad de numeros que se le pasa
const nuevoArreglo = numero => {

    let newArray = []

    for (let i = 1; i <= numero; i++){
        newArray.push(i) 
    }

    return newArray

}

let resultArray = nuevoArreglo(10)
console.log(resultArray);


// Funcion similar a spli

const split = array => {

    let newArray = []

    for(let i = 0; i < array.length; i++){
        let char = array[i]
        newArray.push(char);
    }

    return newArray

}

let resultSplit = split("Chau")
console.log(resultSplit)

// Manejando dos arreglos

const arrayHandler = (uno, dos) => {
    let contenedor = []

    for(let i = 0; i < uno.length; i++){
        contenedor.push(`Soy: ${uno[i]} del array uno - Soy: ${dos[i]} del array dos`)

    }
return contenedor
}

let handler = arrayHandler([1,2,3,4], ["h","o","l","a"])
console.log(handler)

// Funcion Palindromo

const palindromo = palabra => {

    let invertida = palabra.split("").reverse().join("") 
    
        if(palabra === invertida){
            resultado = true
        } else{
            resultado = false
        }

    return resultado
}

let resultPalindromo = palindromo("neuquen")
console.log(resultPalindromo);


// 1- Algoritmo para convertir una cantidad de pesos a dolares

const cambio = pesos => {
    return pesos * 40.20
}

let cambioDolar = cambio(1000)
console.log(cambioDolar);


// 2- Algoritmo que calcule el salario de un empleado, si se descuenta el 20% de su salario

const salario = sueldo => {
    let descuento = sueldo * 0.20
    return sueldo - descuento
}

let salarioEmpleado = salario(10000)
console.log(salarioEmpleado);

// 3- Hacer un programa para calcular el promedio de 3 notas, si el promedio es mayor o 
// igual que 7 = aprobado sino desaprobado

const calificacion = (nota1, nota2, nota3) => {
    let promedio = (nota1+nota2+nota3) / 3
    if(promedio >= 7){
        return "Has aprobado la materia"
    }else{
        return "No has aprobado"
    }
}

let estudiante = calificacion(6,8,7)
console.log(estudiante);


// 4- Elaborar un programa que simule una clave de acceso:
// -> Si el usuario es Admin y la clave es 123456 mostrar el mensaje acceso 
// permitido sino acceso denegado

const acceso = (usuario, clave) => {
    if(usuario === "Admin" && clave === "123456"){
        return "Acceso permitido"
    }else{
        return "Acceso denegado"
    }
}

let usuario = acceso("Admina", "123456")
console.log(usuario);

// 5-  Elaborar un programa que muestre la cantidad de numeros pares entre dos numeros.

const cantidadPares = (num1, num2) => {
    let pares = []
    for (let i = num1; i < num2; i++) {
        if (i%2 === 0){
            pares.push(i)
        }        
    }
    return pares
}

let numerosPares = cantidadPares(3,30)
console.log(numerosPares);

// 6- Elaborar un programa que permita ingresar un numero entero del 1 y 10 y muestre 
// la tabla de multiplicar de ese numero.

const tabla = numero => {
    let tablaMultiplicada = []
    let i = 0;
    while (i <= 10) {
        tablaMultiplicada.push(`${numero} x ${i} = ${numero * i}`) 
        i++
    }
    return tablaMultiplicada
}

let tablaMultiplicada = tabla(5)
console.log(tablaMultiplicada);

// Ejercicio 1
// Realizar una funcion que reciba por parametro dos valores,
// el primero sera numerico y el segundo booleano.
//Si el numero es par y el booleano es true entonces retornar "Ha pasado la condicion"
// En cambio, si el numero es impar y el booleano es false retornar "No ha pasado la condicion"-
// Otro caso debe retornar -1

const resultadoValores = (numero, bool) => {
    if(numero %2 === 0 && bool){
        return "Ha pasado la condicion"
    }else if(numero %2 !== 0 && !bool) {
        return "No ha pasado la condicion"
    } else{
        return -1
    }
}

let resultadoCondicion = resultadoValores(13, true)
console.log(resultadoCondicion);

// Ejercicio 2
// Realizar una funcion que indique si una persona se encuentra apta para una competencia fisica.
// Para eso, debemos realizar una funcion que reciba dos parametros
// la edad de la persona (number)
// Si ha entregado sus estudios medicos (booleano)
// La funcion debera evaluar las siguientes condiciones y retornar en cada caso se le pida:
// Si ha entregado sus estudios y es mayor o igual a 18 años: retornar un valor booleano true
// Si ha entregado sus estudios pero es menor de  18 años: retorna un string que diga  
// "solo puede competir con un adulto acompañante"
// Para cualquier otro caso: retorna un valor booleano false.

const competenciaFisica = (numero, estudios) => {
    if(estudios){
        if (numero >= 18) {
            return true
        } else if(numero < 18){
            return "Solo puede competir con un adulto acompañante"
        }
    }else{
        return false
    }
}

let participacion = competenciaFisica(19, false)
console.log(participacion);


// Ejercicio 3
// Realizar una funcion que recibe el array como parametro y lo recorro
// para filtrar los objetos cuya cantidad de paginas sea mayor a 300.
// la funcion debera retornar un nuevo arreglo con los libros que cumplan con la 
// condicion antes mencionada.

let libros = [
    {
      nombre: "historiasInconscientes",
      autor: "Gabriel Rolón",
      paginas: 352,
    },
    {
      nombre: "operacionMasacre",
      autor: "Rodolfo Walsh",
      paginas: 236,
    },
    {
      nombre: "elAlquimista",
      autor: "Paulo Coehlo",
      paginas: 192,
    },
    {
      nombre: "elCampamento",
      autor: "Blue Jeans",
      paginas: 480,
    },
  ]


const filtoLibros = array => {
    
    let librosXPaginas = []
    for (let i = 0; i < array.length; i++) {
           if(array[i].paginas > 300){
                librosXPaginas.push(array[i])
           }        
    }
    return librosXPaginas

}

let librosEncontrados = filtoLibros(libros)
console.log(librosEncontrados);

/////////////////////////////////////////////////////////////////////////

// Ejercicio 1

const edades = [11,12,15,18,25,22,10,33,18,5]

// a) Obtener en un nuevo array las edades menores a 18 

const edadesMenores = array => {
    let menoresDieciocho = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] < 18){
            menoresDieciocho.push(array[i])
        }        
    }
    return menoresDieciocho
}

let resultEdadesMenores = edadesMenores(edades)
console.log(resultEdadesMenores);

// b) Obtener en un nuevo array las edades mayor o igual a 18.

const edadesMayores = array => {

    let mayores = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 18) {
            mayores.push(array[i])
        }        
    }
    return mayores
}

let mayoresEdad = edadesMayores(edades)
console.log(mayoresEdad);


// c) Obtener en un nuevo array las edades igual a 18.

const igualesDieciocho = array => {
    let iguales  = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 18) {
            iguales.push(array[i])
        }        
    }
    return iguales
}

let igualesEdad = igualesDieciocho(edades)
console.log(igualesEdad);

// d) Obtener el menor.

const edadMasChica = array => {
    let comodin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (comodin > array[i]) {
            comodin = array[i]
        }        
    }
    return comodin
}

let laMenor = edadMasChica(edades)
console.log(laMenor);

// e) Obtener el mayor. 

const edadMasGrande = array => {
    let comodin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (comodin < array[i]) {
            comodin = array[i]
        }        
    }
    return comodin
}

let laMayor = edadMasGrande(edades)
console.log(laMayor);


// f) Obtener el promedio de edades.



// g) Incrementar en 1 todas las edades.

// Ejercicio 2

const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
      },
      {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
      }
    ]


// a- Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

const filtrarObjetoEdad = array => {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].edadTitular < 30) {
            resultado.push(array[i])
        }        
    }
    return resultado
}

let objetoFiltado = filtrarObjetoEdad(arrayCuentas)
console.log(objetoFiltado);

// b- Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// c- Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// d- Obtener la cuenta con el titular de la misma más joven.
// e- Obtener un array con las cuentas habilitadas.
// f- Obtener un array con las cuentas deshabilitadas.
// g- Obtener la cuenta con el menor saldo.
// h- Obtener la cuenta con el mayor saldo.


// EXTRAS

// 1 - Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento 
// (objeto literal) una propiedad llamada id con un valor Numérico

const generarID = array => {
    
    for (let i = 0; i < array.length; i++) {  
        array[i].id = i + 1            
    }
    return array
}

generarID(arrayCuentas)
console.log(arrayCuentas);

// 2 - Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, en caso de encontrar 
// retornar la cuenta (él objeto literal completo), caso contrario retornar null

const buscarXid = (array, num) => {

    for (let i = 0; i < array.length; i++) {
        if(array[i].id === num){
            return array[i]
        }   
    }
    return null
}

let busqueda = buscarXid(arrayCuentas, 2)
console.log(busqueda);

// 3 - Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), deberá 
// retornar un array que cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

const filtroPorSaldos = (array, saldo) => {

    let saldoCuenta = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo < saldo) {
            saldoCuenta.push(array[i])
        }        
    }
    return saldoCuenta
}

let saldos = filtroPorSaldos(arrayCuentas, 2500)
console.log(saldos);

// 4 - Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá 
// incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
// Reutilizando la función  buscarPorId 


const incrementarSaldo = (array, id, num) => {

    for (let i = 0; i < array.length; i++) {
        if(buscarXid(array,id)){
            return array[i].saldo += num
        }       
    }
    return undefined
}

let aumento = incrementarSaldo(arrayCuentas, 1, 500)
console.log(aumento);