
const botones = document.querySelectorAll(".botones"); //para escuchar todos los botones

const x = [];
var resultado;
var j;
var signo;
var n_aux1;
var n_aux2;
var cad_aux1;
var cad_aux2;
const cuandoSeHaceClick = function (evento) { //funcion para cuando se presiona un boton

    x.push(this.innerText); //se van gaurdando los valores presionados en un array
    //i+=1; //se actualiza el indice    
    if (this.innerText == "=") {    
        alert("El resultado es: " + calcular2(x));  //se muestra el resultado de la operacion
    }
}


function calcular2(x) { //funcion para calcular las operaciones de la calculadora
    var cad = x[0]; // se guarda el primer elemento para poder comparar y concatenar

    for (j=1; j<x.length-1; j++) { //se recorre todo el array menos 1 por que el boton "=" tambien se concatena

        if ((x[j]!= "+") && (x[j]!= "-") && (x[j]!= "*") && (x[j]!= "/")) { //se verifica que lo introducido sean numeros
            cad = cad + x[j]; //se concatenan las cadenas para luego convertir en el primer numero
        }
        else {
            signo = x[j]; //se guarda la cadena que contiene el signo de la operacion
            cad_aux1 = parseFloat(cad); //pasamos la cadena a numerico
            n_aux1 =  cad_aux1; //guardamos el numero para poder operar despues
            j++; //se actualiza el indice para saltear el signo
            cad = x[j]; //se guarda el primer caracter despues del signo para poder calcular el siguiente numero
            j++; //se actualiza el indice para comparar y concatenar               
            break; //una vez guardado se rompe el ciclo para calcular el siguiente numero
        }
    }

    for (j;j<x.length-1; j++) { //se calcula el segundo numero
        if ((x[j]!= "+") && (x[j]!= "-") && (x[j]!= "*") && (x[j]!= "/")) { //se verifica que sean numeros
            cad = cad + x[j]; //se concatenan las cadenas para tener el siguiente numero
        }
        else {
            break; //como ya es el segundo numero se sale
        }
    }
    cad_aux2= parseFloat (cad); //se convierte la cadena a numero
    n_aux2 = cad_aux2; //se guarda el numero
    //se verica que signo tiene la oper+acion para poder calcularla
    if (signo == "+") {
        resultado = n_aux1 + n_aux2;
    }
    else if (signo == "-") {
        resultado = n_aux1 - n_aux2;
    }
    else if (signo == "*") {
        resultado = n_aux1 * n_aux2;
    }
    else if (signo == "/") {
        resultado = n_aux1 / n_aux2;
    }
    else {
        resultado = 0;
    }
    let c = x.length*2; //se duplica la longitud del array para recorrerlo y vaciarlo
    for (j = 0; j<c; j++) { //se recorre y se eliminan los elementos
        x.pop();
    }
    return resultado; //retorna el resultado de la operacion
}
//le dice al boton seleccionado que haga algo
botones.forEach(boton => {
	boton.addEventListener("click", cuandoSeHaceClick);
});
