var primerDato = prompt("Inserta el primer dato");
var segundoDato = prompt("Inserta el segundo dato");
var tercerDato = prompt("Inserta el tercer dato");

const array = [primerDato, segundoDato, tercerDato];
console.log(array);

let menorMayor = array.sort();
console.log(`De menor a mayor `+ array);

let mayorMenor = array.reverse();
console.log(`De mayor a menor `+ array);

if(primerDato && segundoDato && tercerDato){
    console.log("Son iguales");
}