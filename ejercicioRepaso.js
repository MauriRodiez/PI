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
// 2- Algoritmo que calcule el salario de un empleado, si se descuenta el 20% de su salario
// 3- Hacer un programa para calcular el promedio de 3 notas, si el promedio es mayor o igual que 7 = aprobado sino desaprobado
// 4- Elaborar un programa que simule una clave de acceso:
// -> Si el usuario es Admin y la clave es 123456 mostrar el mensaje acceso permitido sino acceso denegado
// 5-  Elaborar un programa que muestre la cantidad de numeros pares entre dos numeros.
// 6- Elaborar un programa que permita ingresar un numero entero del 1 y 10 y muestre la tabla de multiplicar de ese numero.

// Ejercicio 1
// Realizar una funcion que reciba por parametro dos valores,
// el primero sera numerico y el segundo booleano.
//Si el numero es par y el booleano es true entonces retornar "Ha pasado la condicion"
// En cambio, si el numero es impar y el booleano es false retornar "No ha pasado la condicion"-
// Otro caso debe retornar -1

// Ejercicio 2
// Realizar una funcion que indique si una persona se encuentr apta para una competencia fisica.
// Para eso, debemos realizar una funcion que reciba dos parametros
// la edad de la persona (number)
// Si ha entregado sus estudios medicos (booleano)
// La funcion debera evaluar las siguientes condiciones y retornar en cada caso se le pida:
// Si ha entregado sus estudios y es mayor o igual a 18 años: retornar un valor booleano true
// Si ha entregado sus estudios pero es menor de  18 años: retorna un string que diga "solo puede competir con un adulto acompañante"
// Para cualquier otro caso: retorna un valor booleano false.

// Ejercicio 3
// Realizar una funcion que recibe el array como parametro y lo recorro
// para filtrar los objetos cuya cantidad de paginas sea mayor a 300.
// la funcion debera retornar un nuevo arreglo con los libros que cumplan con la condicion antes mencionada.

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
  ];