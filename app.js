




let intentos = 1;
let numeroSecreto = 1;
let numerosIntentados =[];
let numeroMaximo = 10;

condicionesIniciales();


function verificarNumero(){
    //asigna elemento html por id, recoge el valor ingresado en el elemento por el usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
   // console.log(numeroSecreto);
   // console.log(typeof(numeroSecreto));
    console.log(numeroSecreto === numeroDeUsuario);

    
    if (numeroDeUsuario === numeroSecreto) {

       
        asignarTextoElemento('p',`¡Lo Descubriste! el numero secreto es 
            <span style="color: orange; font-size: 60px; font-weight: bold;">
            ${numeroSecreto}
            </span> 
            Lo lograste en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`);

            document.getElementById('reiniciar').removeAttribute('disabled');
            
    }
    else {
        if (numeroSecreto<numeroDeUsuario){
            asignarTextoElemento('p',`El numero secreto es 
                <span style="color: red;font-weight: bold;">
                Menor
                </span> 
                que ${numeroDeUsuario}   ¡Intentalo de nuevo!`);
        }
        else {
            asignarTextoElemento('p',`El numero secreto es 
                <span style="color: red;font-weight: bold;">
                Mayor
                </span> 
                que ${numeroDeUsuario}   ¡Intentalo de nuevo!`);
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    //otra forma de llamar por id se usa # y query
    return document.querySelector('#valorUsuario').value = '';
    
}


function asignarTextoElemento (elementoHtml,texto){
    let titulo = document.querySelector(elementoHtml);
titulo.innerHTML = (texto);
return;
}

function generarNumeroSecreto() {
    numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(numerosIntentados);

    if (numerosIntentados.length == Math.floor(numeroMaximo/3)){
        asignarTextoElemento('p','Ya salieron todas las posibilidades');
    } else {
   //si el numero generado ya esta en la lista entonces
   if(numerosIntentados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }
        else {
            numerosIntentados.push(numeroGenerado);
            return numeroGenerado;
        }
        }
}



function reiniciarJuego() {
//limpiar caja elemento html
limpiarCaja();
//resetear intentos
//volver a escribir coloca un numero del 1 al 10
//generarnumero aleatorio
condicionesIniciales();
//desabilitar boton reiniciar
document.getElementById('reiniciar').setAttribute('disabled', 'true');

}
function condicionesIniciales(){
    asignarTextoElemento('p',`Coloca un numero del 1 al ${numeroMaximo}`);
    //uso las comillas inversas para poder hacer un salto de linea en el codigo
    asignarTextoElemento('h1',`<span style="color: orange; 
    font-size: 60px; font-weight: bold;">Numero escondido</span> `);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
console.log(numeroSecreto);
}


