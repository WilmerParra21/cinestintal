const formDatos = document.querySelector('.formu');
const compra = document.querySelector('.comprar');
const titular = document.querySelector('.titular-pago');
const correo = document.querySelector('.correo');
const tipo = document.querySelector('.tipo-tarjeta');
const tarjetanum = document.querySelector('.num-tarjeta');
const clave = document.querySelector('.clave');
const clave2 = document.querySelector('.clave2');
const boleto = document.querySelector('.cantidad-boleto');
const monto = document.querySelector('.monto');

 eventListeners();
 
function eventListeners(){
	document.addEventListener('DOMContentLoaded', inicio);
    boleto.addEventListener('blur', validar);
    monto.addEventListener('blur', validar);
    correo.addEventListener('blur', validar);
    titular.addEventListener('blur', validar);
    tipo.addEventListener('blur', validar);
    tarjetanum.addEventListener('blur', validar);
    clave.addEventListener('blur', validar);
    clave2.addEventListener('blur', validar);
}

function inicio(){
	compra.disabled = true;
}

function validarLongitud(campo){

	if (campo.value.length > 0){
		campo.style.borderBottom = '3px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
	} else {
		campo.style.borderBottom = '3px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
	}
}

function validar(){
	validarLongitud(this);

    if(this.className === "monto"){
       validarMonto(this);
    }

	if(this.type === "email"){
		validarEmail(this);
	}

	if(this.type === "password"){
		validarClave(this);
	}

	let error = document.querySelectorAll('.error');

	 if(boleto.value !== '' && monto.value !== '' && correo.value !== '' && titular.value !== '' && tipo.value !== '' && tarjetanum.value !== '' && clave.value !== '' && clave2.value !== ''){
            if(error.length === 0){
               compra.disabled = false;
            }
    }
}

 function validarEmail(campo){
        const mensaje = campo.value;
        if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottom = '2px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
        } else {
        campo.style.borderBottom = '2px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
        }
    }

function validarClave(campo){

	if(clave2.value === clave.value){
		campo.style.borderBottom = '2px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
        } else if (clave2.value != clave.value){
        campo.style.borderBottom = '2px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
        }
}

function validarLetra(e){ 
                       
var key = e.keyCode || e.which;
             
var teclado = String.fromCharCode(key).toLowerCase();

var letras = ("abcdefghijklmnñopqrstuvwxyz");

var especiales = ("8-37-38-46");

var estado = false;

for(var i in especiales){
    if(key==especiales[i]){
        estado=true;
      }
       if(letras.indexOf(teclado)==-1 && !estado){
      return false;
    }
}
}

function validarNum(a){ 
                       
var key = a.keyCode || a.which;
              
var teclado = String.fromCharCode(key).toLowerCase();

var num = ("0123456789");

var especiales = ("8-37-38-46");

var estado = false;

for(var i in especiales){
    if(key==especiales[i]){
        estado=true;
      }
      if(num.indexOf(teclado)==-1 && !estado){
      return false;
    }
}
}

function validarMonto(campo){

     let precio = 720;

    let m = Math.pow(precio, boleto.value);

    if(monto == m){
        campo.style.borderBottom = '2px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
        } else{
        campo.style.borderBottom = '2px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
        }
}

/* se puede realizar con AJAX 
function montoTotal(campo){
    let precio = 720;

    for(i=0; i<=boleto.value; i++){
       monto = (monto + precio);
    }
}
*/

// boton de suscribirse
const email = document.getElementById('Form-email');
const enviar2 = document.getElementById('envio-correo');

eventListeners2();

function eventListeners2(){
    document.addEventListener('DOMContentLoaded', inicio2);
    email.addEventListener('blur', validar2);
    }

function inicio2(){
    enviar2.disabled = true;
}

function validar2(){

    if(this.type === "email"){
        validarEmail2(this);
    }

    let error = document.querySelectorAll('.error');

     if(email.value !== ''){
            if(error.length === 0){
               enviar2.disabled = false;
            }
    }

}

 function validarEmail2(campo){
        const mensaje = campo.value;
        if (mensaje.indexOf('@') !== -1){
        campo.style.borderBottom = '2px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
        } else {
        campo.style.borderBottom = '2px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
        }
    }
