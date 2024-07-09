console.log("Bienvenido");

//******************************* */
let nombre = "Armando";
console.log(`Hola ${nombre}`);

//******************************* */
alert(`Hola ${nombre}`);

//******************************* */
let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(respuesta);

//******************************* */
let valor1 = 10;
let valor2 = 80;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//******************************* */
let resta = valor2 - valor1;
console.log(`La diferencia entre ${valor2} y ${valor1} es igual a ${resta}`);

//******************************* */
let edad = prompt("Ingresa tu edad");
if(edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//**************************** */

let numero = parseInt(prompt("Ingresa un numero"));
if(numero > 0) {
    console.log("EL numero es positivo");
} else if(numero == 0) {
    console.log("El numero es cero");
} else {
    console.log("El numero es negativo");
}

//************************** */
contador = 1;
while(contador <= 10) {
    console.log(contador);
    contador++;
}

/************************* */
let nota = 90;
if(nota>=7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

//************************* */
console.log(Math.random());

//************************* */
console.log(Math.floor(Math.random()*10)+1);

//************************** */
console.log(Math.floor(Math.random()*1000)+1);