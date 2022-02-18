const error = document.querySelector(".fallosForm");const btnValidar = document.querySelectorAll(".botonAzul")[0];
const inputUsuario = document.querySelectorAll("input[name='nombreUsuario']");
const inputPass = document.querySelectorAll("input[name='pass']");
const inputPassRepe = document.querySelectorAll("input[name='rPass']");
const inputEmail = document.querySelector("input[name='email']");

btnValidar.addEventListener('click', function(event){
    event.preventDefault();
    borrarErrores();
    validarUsuario();
    validarPass();
    validarPassRepe();
    validarEmail();
});

// Pinta los errores en la p dentro del contenedor de errores
function mostrarErrores(texto, mensaje){
    texto.classList.add("border-red");
        let error = document.querySelector(".fallosForm");
    error.innerHTML= `${error.innerText}<br>${mensaje}`;
}

// Borra los mensajes de errores
function borrarErrores(){
      error.innerText = '';
  }

// Valida el input de usuario
function validarUsuario(){
    inputUsuario.forEach(function(texto){
        let valor = texto.value;
        let mensaje = "";
        let expresionRegular = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}/;
        if(valor.match(expresionRegular)){
            mensaje = "";
        }else{
            mensaje = "USUARIO: Unicamente esta permitido introducir texto y mínimo 2 caracteres";
            mostrarErrores(texto,mensaje);
        }
    });
}

// Valida la Contraseña
function validarPass(){
    inputPass.forEach(function(texto){
        let valor = texto.value;
        let mensaje = "";
        let expresionRegular = /[A-Za-z0-9!?-]{8,12}/;
        if(valor.match(expresionRegular)){
            mensaje = "";
        }else{
            mensaje = "CONTRASEÑA: Debe contener entre 8-12 caracteres";
            mostrarErrores(texto,mensaje);
        }
    });
}

// Valida que la contraseña sea igual a Repetir contrasenya

function validarPassRepe(){
    inputPassRepe.forEach(function(texto){
        let mensaje = "";
        pass1 = inputPass[0];
        pass2 = inputPassRepe[0];
        if (pass1.value == pass2.value) {
            mensaje ="";
        }else{
            mensaje = "Las contraseñas no coinciden";
            mostrarErrores(texto,mensaje);
        }
    })
}

// Validar email

function validarEmail(){
    let valor = inputEmail.value;
    let mensaje = "";
    let expresionRegular = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (valor.match(expresionRegular)){
      mensaje = "";
    }else {
      mensaje = "EMAIL: INCORRECTO";
      mostrarErrores(email,mensaje);
    }
  }
  