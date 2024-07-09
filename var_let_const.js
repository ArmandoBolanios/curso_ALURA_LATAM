var miNombre = "Armando"; //variable global
console.log(miNombre);

function mostrarNOmbre() {
    console.log(miNombre);
}

mostrarNOmbre();

//************************* */
//variable local
function mostrarApellido() {
    var miApellido = "Bolaños";
}

mostrarApellido();
//console.log(miApellido); //Error, miApellido no está definido


