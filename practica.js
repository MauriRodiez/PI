str = "12"
//str = +str
console.log(+str);

let compa = !(true && false || true)
console.log(compa)

let n = 2 * 3 ** 3 -1
console.log(NaN);

function test(counter){
    console.log("test");
    if(counter > 0){
        test(--counter);
    }
}

test(3);

console.log("---------------------");

let show = function(){
    console.log("test");
}

setTimeout(show, 2000)