const pelicula = document.getElementById('pelicula');
const cantBoleto = document.getElementById('cantidadbolet');
const monto2 = document.getElementById('total');
const titular2 = document.getElementById('titular');
const correo2 = document.getElementById('email');
const tipo2 = document.getElementById('tipotarget');
const numTarget = document.getElementById('tarjeta');
const contraseña = document.getElementById('contraseña');
const enviarcompra = document.getElementById('comprar-boleto-directo');
const formulario = document.getElementById('formulary');

  eventListeners2();

function eventListeners2(){
    // Inicio de la aplicación y deshabilita boton de envio
    document.addEventListener('DOMContentLoaded', start);

    // Campos del formulario
   //pelicula.addEventListener('blur', validacion);
   cantBoleto.addEventListener('blur', validacion);
   monto2.addEventListener('blur', validacion);
   titular2.addEventListener('blur', validacion);
   correo2.addEventListener('blur', validacion);
   tipo2.addEventListener('blur', validacion);
   numTarget.addEventListener('blur', validacion);
   contraseña.addEventListener('blur', validacion);
   
    // Boton de envio
    formulario.addEventListener('submit', animarEnvio);

}
function start(){
    //enviarcompra.disabled = true;
}

function animarEnvio(e){
    const proceso = document.querySelector('#proceso');
    proceso.style.display = "block";

    let envioAnimate = document.createElement('img');
    envioAnimate.src = "../gif/gif-email.gif";
    envioAnimate.style.display = 'block';
    envioAnimate.style.width = '250px';
    setTimeout(function(){
        proceso.style.display = 'none';
        document.querySelector('#enviado').appendChild(envioAnimate);
        setTimeout(function(){
            envioAnimate.remove();
            formulario.reset();
        }, 5000);
    }, 3000);
    e.preventDefault();
}

function validarLong(campo){

    if (campo.value.length > 0){
        campo.style.borderBottom = '2px solid green';
        campo.style.paddingBottom = '3px';
        campo.classList.remove('error');
    } else {
        campo.style.borderBottom = '2px solid red';
        campo.style.paddingBottom = '3px';
        campo.classList.add('error');
    }

}
    function validacion(){

    validarLong(this);

        if(this.type === "email"){
            validarEmail2(this);
        }

        let errores = document.querySelectorAll('.error');

        if (cantBoleto.value !== '' && monto2.value !== '' && titular2.value !== '' && correo2.value !== '' && tipo2.value !== '' && numTarget.value !== ''  && contraseña.value !== ''){
            if (errores.length === 0){
                enviarcompra.disabled = false;
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