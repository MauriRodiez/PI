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

    let numeroX 

    for(let i = 0; i < 100; i++){

        numeroX = i + numero

        console.log(i);

        if((i + numero)%2 === 0 ){

            
            console.log (`El numero ${numeroX} es par`)

        }
        return numeroX
    }

}

console.log(loopDePares(31))