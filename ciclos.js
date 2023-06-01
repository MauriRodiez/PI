

// Factorial

const factorial = numero => {

    let numeroFactorial = 1;
    for(let i = 1; i <= numero; i++){

        numeroFactorial *= i;
        console.log(numeroFactorial);

    }
    return numeroFactorial;
}

let resultado = factorial(10);
console.log(resultado);

// Fibonacci

const fibonacci = numero => {

    let a = 0;
    let b = 1;
    for(let i = 1; i >= numero; i++){

        let base = a + b;
        let c = i;
    }

}