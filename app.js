/*let titulo = document.querySelector('h1'); antes las variables eran de tipo primitivo, ahora esta es un objeto
 En este caso h1 sera un objeto y una de las cosas que puede hacer ese objeto es darle un texto(Titulo)
titulo.innerHTML = 'Juego del numero secreto'; 
innerHTML puede agregar cualquier cosa a la variable a la que este asignado dicho metodo, puede agregar atqieutas de 
imagen o cualquier cosa. 

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
para asignar el innerHTML se pone la variable donde se asigno el elemento en el DOM(Document Model Object), y se pone variable.innerHTML
*/


//TODO: RECORDATORIOS
//TODO: 1. typeof(x); devuelve el tipo de dato que queremos saber  
//TODO: 2. Es importante recordar que podes utilizar los operadores trenarios. (comparacion ? respuesta : respuestas del else)
//TODO: 3. getElementById(''): es cuando solo hay uno, busca un elemento por su ID, que debe ser único en la página. 
//TODO: 4. querySelector(#): pueden ser varios, busca un elemento(s) por su selector CSS, que puede ser un ID, una clase, un tag o una combinación de ellos. 
//TODO: Es más flexible, pero puede ser más lento que getElementById();
//TODO: 5. el removeAttribute en document.getElementById('x').removeAttribute('y') sirve para eliminar un atributo de un objeto.
//TODO: 5. el setAttribute en document.getElementById('x').setAttribute('y',true) sirve para regresar un atributo al objeto.
//TODO: y espera dos parametro, el valor a setear, y 'true'.

//**************************************************CODIGO*************************************************************


let numeroSecreto = 0; //condiciones iniciales les va a dar el nuemero correcto a estas dos variables.
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//?verificarIntento: esta funcion obtiene el intento del usuario, lo parsea a entero, y verifica si 
//?el numero del usuario es igual o diferente al numero random generado.
function verificarIntento(){

let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//se puso parseInt porque era una entrada de tipo string y se paso a tipo numero(number)

/*
console.log(numeroSecreto);
console.log(typeof(numeroSecreto)); 
console.log(numeroDeUsuario);
console.log(typeof(numeroDeUsuario));
console.log(numeroSecreto===numeroDeUsuario); triple igual: igual en valor e igual en tipo.
*/
console.log(numeroSecreto);

if (numeroDeUsuario === numeroSecreto){

    asignarTextoElemento('p', `Acertaste el numero, lo hiciste en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);

    document.getElementById('reiniciar').removeAttribute('disabled');
    //remueve el atributo "disabled" del boton con el id "reiniciar" cuando se termina el juego.
    //se puedo haber hecho por document.querySelector(#reiniciar).removeAtribute("disabled");
    /**
     ** document.getElementById(''): Selecciona el elemeno con esa ID(las ID son unicas).
     ** document.querySelector('#'): Selecciona el primer elemento con esa ID,clase, o cualquier identificador.
     **document.querySelectorAll(#): Selecciona a todos los elementos con ese identificador.
     */ 

}else if(numeroDeUsuario > numeroSecreto){

    asignarTextoElemento('p', 'el numero secreto es menor');
    
}

else{
    asignarTextoElemento('p', ' el numero  secreto es mayor');
    

}

intentos ++;
limpiarCaja();
return;

}

//?asignarTextoElemento: esta funcion selecciona cualquier elemento del DOM por medio de document.querySelector(); 
//?y le asigna un texto a ese elemento.
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto; 
    return;
}



//?generarNumeroSecreto: esta funcion genera un numero random 
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los numeros posibles.')
    }else{

    }
    if(listaNumerosSorteados.includes(numeroGenerado)){
    //si el numero generado ya esta en la lista, se vuelve a llamar a la funcion generarNumeroSecreto(recursividad)
    return generarNumeroSecreto();

    }else{

    //siel numero no esta en la lista, se agrega con el metodo push.
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

    }
    
}

//?limpiarCaja: esta funcion limpia el imput si el valor que ingreso el usuario no es el numero generado de manera random.

function limpiarCaja(){

     document.querySelector('#valorUsuario').value = "";
    

} 

//?condicionesIniciales: establece las condiciones que deben haber cuando se reinicie el juego.
function condicionesIniciales(){


    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
 
}

//?reiniciarJuego: se llama a esta funcion si el usuario ya adivino el numero, y le da click al boton nuevo juego.
function reiniciarJuego(){

limpiarCaja();
condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}


condicionesIniciales();