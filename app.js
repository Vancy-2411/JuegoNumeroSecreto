//Declaración de variables
//Lista, necesaria para que no se repitan los números sorteados 
let listaNumeros = []; 
//Hasta el número 10 va a sortearnos un número
let numeroMaximo = 10;
 //Nos genera un número secreto mediante la funcion generarNumeroSecreto y lo almacena en la variable numeroSecreto
 let numeroSecreto = generarNumeroSecreto();
 //Inicializa la variable intentos a 1
 let intentos = 1;

 //Función para modificar/asignar texto a los elementos HTML
 function asignarTextoElemento(elemento, texto) {
   let elementoHTML= document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
 }

 //Función para verificar que el usuario acertó o no el número secreto
 function verificarIntento(){
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value); //Almacenar número en la variable y constatar de que sea un valor numerico
    if (numeroDeUsuario === numeroSecreto){  //Comparación del número ingresado por el usuario con el numero secreto
     asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`) //Si acierta se va a mostrar el mensaje en lugar de las indicaciones
     document.getElementById('reiniciar').removeAttribute('disabled'); //Se habilita el botón para iniciar un nuevo juego
    }else {
      if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor'); //Indicaciones al usuario para que adivine el número
      }else{
        asignarTextoElemento('p','El número secreto es mayor'); //Indicaciones al usuario para que adivine el número
      }
      intentos++; //Se van incrementando deacuerdo a los intentos del usuario
      limpiarCaja(); //Llamamos a la función para que el número se borre automáticamente
    }
    return; //Una buena práctica es que las funciones nos retornen un valor
 }

 //Función para generar el numero secreto de manera automática
 function generarNumeroSecreto() {
 //return Math.floor(Math.random()*10)+1; //Operación matemática que nos genera el número 
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //Operación matemática que nos genera el número haciendo uso de Math.random
 console.log(numeroGenerado);
 console.log(listaNumeros);
 //Si ya sorteamos todos los numeros 
 if(listaNumeros.length === numeroMaximo){
  asignarTextoElemento('p','Ya se sortearon todos los números posibles');
 } else {
 // Si el numero generado esta incluido en la lista hacemos una operacion, esto se hace para que el número no se repita
  if (listaNumeros.includes(numeroGenerado)) {
     return generarNumeroSecreto();
  } else {
    listaNumeros.push(numeroGenerado);
    return numeroGenerado;
  }
}
 }


 //Función que limpia la caja en la cual el usuario ingresa su respuesta
 function limpiarCaja(){
 document.querySelector('#valorUsuario').value='';

 }

 //Función para reiniciar al juego, poniendo a todos los parametros con los valores inciales
 function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un numero entre el 1 y el ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();  //Generar el número aleatorio
  intentos =1; //Inicializar el número de intentos
 }

 //Función que comienza un nuevo juego
  function reiniciarJuego(){
  //Limpiar la caja
  limpiarCaja();
  //Indicar mensaje de intervalo de numeros
  //Generar el  numero aleatorio
  //Incializar el número de intentos
  condicionesIniciales();
  //Dehabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true'); 
 }

//Llamamos a la función para que el juego empiece con los valores iniciales
condicionesIniciales();



