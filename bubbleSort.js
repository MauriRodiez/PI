

// Ejercicio 1

/*En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let usuarios = [
    {
        nombre: "Juan",
        likes: 15
    },
    {
        nombre: "Ana",
        likes: 18
    },
    {
        nombre: "Roberto",
        likes: 10
    },
    {
        nombre: "Lucia",
        likes: 5
    },
    {
        nombre: "Sandro",
        likes: 8
    },
    {
        nombre: "Rosa",
        likes: 1
    },
    {
        nombre: "Juana",
        likes: 20
    }
]

const ordenLikes =  (array) => {

    let auxiliar

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length -1; j++) {
            if(array[j].likes < array[j +1].likes){
                auxiliar = array[j]
                array[j] = array[j + 1]
                array[j + 1] = auxiliar
            }            
        }
        
    }
}

ordenLikes(usuarios)
console.log(usuarios);

// Ejercicio 2

/*El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/