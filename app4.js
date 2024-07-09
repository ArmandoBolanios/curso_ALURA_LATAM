let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let PalabraVeces = 'vez';


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Introduce un numero entre 1 y 10");

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${PalabraVeces}.`)
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos en contador cuando no acierta
        intentos = intentos + 1;
        PalabraVeces = 'veces';
    }
}