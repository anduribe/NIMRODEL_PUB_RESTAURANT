function Comunica() {
  var elemento = document.getElementById("comu");

  if (elemento.classList.contains("d-none")) {
    elemento.classList.remove("d-none");
  } else {
    elemento.classList.add("d-none");
  }
}

function Reserva() {
  var elemento = document.getElementById("reserva");

  if (elemento.classList.contains("d-none")) {
    elemento.classList.remove("d-none");
  } else {
    elemento.classList.add("d-none");
  }
}

function ajustarClases() {
  var elementoc = document.getElementById("comu");
  var elementor = document.getElementById("reserva");

  if (window.innerWidth < 992) {
    // Dispositivos pequeños
    elementoc.classList.add("d-none");
    elementor.classList.add("d-none");
  } else {
    // Dispositivos grandes
    elementoc.classList.remove("d-none");
    elementor.classList.remove("d-none");
  }
}

ajustarClases(); // Ajustar las clases cuando se carga la página

window.onresize = function () {
  ajustarClases();
};

function mostrarFormulario() {
  // Obtener una referencia a cada uno de los elementos de entrada del formulario
  var inputNombre = document.getElementById("co1");
  var inputCorreo = document.getElementById("co2");
  var inputTelefono = document.getElementById("co3");
  var inputMotivo = document.getElementById("co4");

  // Obtener el valor de cada elemento de entrada
  var valorNombre = inputNombre.value;
  var valorCorreo = inputCorreo.value;
  var valorTelefono = inputTelefono.value;
  var valorMotivo = inputMotivo.value;

  // Concatenar todos los valores en un mensaje

  alert(
    "Muchas gracias " +
      valorNombre +
      "  recibimos su correo " +
      valorCorreo +
      " junto a su telefono " +
      valorTelefono +
      " y el motivo de su contacto " +
      valorMotivo
  );
}

function reservaFormulario() {
  /* // Obtener una referencia a cada uno de los elementos de entrada del formulario
    var inputNombre = document.getElementById("r1");
    var inputCorreo = document.getElementById("r2");
    var inputTelefono = document.getElementById("r3");
    var inputFecha = document.getElementById("r4");
    var inputHora= document.getElementById("r5");
    var inputAsistentes = document.getElementById("r6");
    
    
   
    // Obtener el valor de cada elemento de entrada
    var valorNombre = inputNombre.value;
    var valorCorreo = inputCorreo.value;
    var valorTelefono = inputTelefono.value;
    var valorFecha = inputFecha.value;
    var valorHora = inputHora.value;
    var valorAsistentes = inputAsistentes.value;
    
    // Concatenar todos los valores en un mensaje
    
                  
    alert("Muchas gracias " + valorNombre + "  recibimos su correo " + valorCorreo + " junto a su telefono " + valorTelefono + " la fecha " + valorFecha + " la hora " + valorHora + "Numero de Asistentes" + valorAsistentes ); */
}

$(document).ready(function () {
  $("#breserva").click(function () {
    var Nombre = $("#r1").val();
    var Correo = $("#r2").val();
    var Telefono = $("#r3").val();
    var Fecha = $("#r4").val();
    var Hora = $("#r5").val();
    var Asistentes = $("#r6").val();

    if (Nombre != "" && Correo != "" && Asistentes != "") {
      alert(
        "Estimado: " +
          Nombre +
          "  agradecemos por reservar con nosotros. Hemos registrado " +
          Asistentes +
          " asistentes.  Se ha enviado el codigo de confirmacion al correos " +
          Correo +
          " Gracis por preferirnos. "
      );
    } else {
      alert("Complete todos los campos");
    }
  });

  $(".card-img-top").on("click", function () {
    var imageSrc = $(this).attr("src");
    $("#modalImage").attr("src", imageSrc);
    $("#modal").modal("show");
    var cardText = $(this).siblings(".card-body").find(".card-text").text();
    $("#modalText").text(cardText);
  });
});
