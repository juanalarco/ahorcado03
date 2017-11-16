var palabras=["raton","pato","gato","loro","aguila"];
var aleatorio = palabras[Math.floor(Math.random() * palabras.length)];
var palabra0="";
var letrausuario="";
//Este bucle es para salir del while de comprobacion de letras
var bucle=false;
var intentos=0;
//Array para almacenar palabras elegidas
var solucion=[];

var acertado=false;
//Hemos creado esta variable para compararla con la longitud de la palabra
var letrasAcertadas=0;
//Para salir del bucle cuando has ganado
var salirbucleganar=false;



//Comprobacion con consoleLog






// while (intentos<5) {
//   letrausuario=prompt("Dime una letra");
//   if (letrausuario=isNaN(letrausuario)) {
//     alert("Correcto, pide otra letra");
//   }else {
//       alert("Incorrecto, tienen que ser letras");
//       intentos--;
//   }
// intentos++;
// bucle=true;
// }


var adivinar=aleatorio;
console.log(adivinar);

//Recorremos el array de adivinar letra por letra y la almacenamos en i
for (var i = 0; i < adivinar.length; i++) {
  adivinar[i]
  console.log(adivinar);

}

//Cambiamos las letras por 0s
for (var i = 0; i < adivinar.length; i++) {
  palabra0=palabra0+"0";

}


while (intentos<5 && salirbucleganar==false) {
    letrausuario=prompt("Dime una letra");
  for (var i = 0; i < adivinar.length; i++) {
    //recorremos el array de adivinar caracter por caracter y lo comparamos con la letra que introducimos
    if (adivinar.charAt(i)==letrausuario) {
      acertado=true;
      //metemos en el array vacio el caracter acertado por el prompt
      solucion[i]=adivinar.charAt(i);
    }
  }
  if (acertado==false) {
    alert("Has fallado");
    intentos++;
  }
  else {
        alert("Has acertado");
letrasAcertadas++;
}

if (letrasAcertadas==adivinar.length) {
alert("Has ganado campeon");
salirbucleganar=true;
}

    acertado=false;
}






console.log(palabras);
console.log(solucion);


console.log(palabra0);



//Mostramos resultados
var element = document.getElementById("PalabraAdivinar");
element.textContent="Tu palabra era: "+adivinar;



var element = document.getElementById("Intentos");
element.textContent="Tus Intentos son "+intentos;
