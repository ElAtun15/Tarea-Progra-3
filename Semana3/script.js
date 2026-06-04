// script.js - validación con JavaScript vanilla mejorada
(function () {
  const form = document.getElementById("clienteForm");

  function validEmail(email) {
    // Validación simple pero robusta
    return /^\S+@\S+\.\S+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = (document.getElementById("nombre").value || "").trim();
    const email = (document.getElementById("email").value || "").trim();
    const generoEl = document.querySelector('input[name="genero"]:checked');
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if (!nombre) {
      alert("Por favor, ingrese su nombre completo.");
      document.getElementById("nombre").focus();
      return;
    }

    if (!email || !validEmail(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      document.getElementById("email").focus();
      return;
    }

    if (!generoEl) {
      alert("Por favor, seleccione su género.");
      return;
    }

    if (!pais) {
      alert("Por favor, seleccione su país.");
      document.getElementById("pais").focus();
      return;
    }

    if (!terminos) {
      alert("Debe aceptar los términos y condiciones.");
      return;
    }

    // Resumen antes de enviar
    const mensaje = [
      "Confirma el envío de los datos:",
      `Nombre: ${nombre}`,
      `Correo: ${email}`,
      `Género: ${generoEl.value}`,
      `País: ${pais}`,
    ].join("\n");

    if (confirm(mensaje)) {
      alert("Registro enviado. ¡Gracias!");
      form.reset();
    }
  });
})();