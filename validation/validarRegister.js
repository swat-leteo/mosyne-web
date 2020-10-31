export default function validarRegister(valores) {
  let errores = {};

  if (valores.nombre.trim() === "") {
    errores.nombre = "Completa este campo";
  } else if (valores.nombre.length < 2) {
    errores.nombre = "Mínimo 2 caracteres";
  }

  if (valores.apellido.trim() === "") {
    errores.apellido = "Completa este campo";
  } else if (valores.apellido.length < 3) {
    errores.apellido = "Mínimo 3 caracteres";
  }

  if (valores.email.trim() === "") {
    errores.email = "Completa este campo.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Correo electrónico no válido.";
  }

  if (valores.password.trim() === "") {
    errores.password = "Completa este campo.";
  } else if (valores.password.length < 8) {
    errores.password = "Mínimo 8 caracteres.";
  }

  if (valores.confirmar.trim() === "") {
    errores.confirmar = "Completa este campo";
  } else if (valores.confirmar !== valores.password) {
    errores.confirmar = "Las contraseñas no coinciden";
  }

  return errores;
}
