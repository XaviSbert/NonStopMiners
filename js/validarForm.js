const error = document.querySelector(".fallosForm");
const btnValidar = document.querySelectorAll(".botonAzul")[0];
const formLogin = document.querySelector(".formLogin");
const formRegistro = document.querySelector(".formRegistro");
const inputUsuario = document.querySelectorAll("input[name='nombreUsuario']");
const inputPass = document.querySelectorAll("input[name='pass']");
const inputPassRepe = document.querySelectorAll("input[name='rPass']");
const inputEmail = document.querySelector("input[name='email']");

btnValidar.addEventListener("click", function (event) {
  event.preventDefault();
  borrarErrores();
  if (validarForm()) {
    alert("SE HA COMPLETADO DE MANERA SATISFACTORIA");
    if (window.location.pathname == "/login.html") {
      formLogin.submit();
    }else{
          formRegistro.submit();
    }
  }
});

function validarForm() {
  let mensajeError = "";
  if (window.location.pathname == "/login.html") {
    mensajeError = validarUsuario();
    mensajeError += validarPass();
    if (mensajeError === "") {
      // alert("Forumlario correcto");
      return true;
    } else {
      mostrarErrores(mensajeError);
      return false;
    }
  } else {
    mensajeError = validarUsuario();
    mensajeError += validarEmail();
    mensajeError += validarPass();
    mensajeError += validarPassRepe();   

    if (mensajeError === "") {
      // alert("Forumlario correcto");
      return true;
    } else {
      mostrarErrores(mensajeError);
      return false;
    }
  }
}

// Pinta los errores en la p dentro del contenedor de errores
function mostrarErrores(mensaje) {
  error.innerHTML = `<br>${mensaje}`;
}

// Borra los mensajes de errores
function borrarErrores() {
  error.innerText = "";
}

// Valida el input de usuario
function validarUsuario() {
  let mensajeError = "";
  inputUsuario.forEach(function (texto) {
    let valor = texto.value;
    let expresionRegular = /^[a-zA-Z]+$/;
    if (valor.match(expresionRegular)) {
      // mensaje = "";
    } else {
      mensajeError +=
        "USUARIO: Unicamente esta permitido introducir texto y mínimo 2 caracteres <br>";
      // mostrarErrores(mensaje);
    }
  });
  return mensajeError;
}

// Valida la Contraseña
function validarPass() {
  let mensajeError = "";
  inputPass.forEach(function (texto) {
    let valor = texto.value;
    // let mensaje = "";
    let expresionRegular = /[A-Za-z0-9!?-]{8,12}/;
    if (valor.match(expresionRegular)) {
      // mensaje = "";
    } else {
      mensajeError = "CONTRASEÑA: Debe contener entre 8-12 caracteres <br>";
      // mostrarErrores(mensaje);
    }
  });
  return mensajeError;
}

// Valida que la contraseña sea igual a Repetir contrasenya

function validarPassRepe() {
  let mensajeError = "";
  inputPassRepe.forEach(function () {
    // let mensaje = "";
    pass1 = inputPass[0];
    pass2 = inputPassRepe[0];
    if ((pass1.value == pass2.value) && (pass2.value !== "")) {
      // mensaje = "";
    } else {
      mensajeError = "REPETIR CONTRESEÑA: Las contraseñas no coinciden <br>";
      // mostrarErrores(mensaje);
    }
  });
  return mensajeError;
}

// Validar email

function validarEmail() {
  let mensajeError = "";
  let valor = inputEmail.value;
  // let mensaje = "";
  let expresionRegular =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (valor.match(expresionRegular)) {
    // mensaje = "";
  } else {
    mensajeError = "EMAIL: INCORRECTO (ejemplo@email.com) <br>";
    // mostrarErrores(mensaje);
  }
  return mensajeError;
}
