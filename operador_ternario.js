let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 2;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Introduce un numero entre 1 y 10");

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}.`)
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        intentos++;
        if(intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}