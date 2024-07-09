let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

alert("¡Bienvenido a nuestro sitio web!");

alert("¡Error! Completa todos los campos");
alert(mensajeDeError);

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = prompt("¿Cuál es tu edad?");

if(edadUsuario >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
} else {
    alert("Eres menor de edad");
}
