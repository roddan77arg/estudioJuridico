// Obtener referencia al formulario
const formulario = document.querySelector('form');

// Agregar un event listener para la acción de enviar el formulario
formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar los campos del formulario
  if (nombre === '') {
    alert('Por favor, ingrese su nombre y apellido.');
    return; // Detener la ejecución si el campo está vacío
  }

  if (email === '') {
    alert('Por favor, ingrese su correo electrónico.');
    return;
  }

  // Continuar con el envío del formulario o realizar otras acciones
  // ...
});
