"use strict";

$(document).ready(function () {
  $("#verOfertaC").click(function () {
    $("#ofertaChimenea").toggle("slow");
  });
});

$(document).ready(function () {
  $("#verOfertaH").click(function () {
    $("#ofertaHerramientas").toggle("slow");
  });
});

$(document).ready(function () {
  $("#verOfertaEspecial").click(function () {
    $("#ofertaEspecial").toggle("slow");
    $("#regaloIMG").attr("src", "img/ofertaEspecial.jpg");
  });
});

$("#chimeneaIMG, #herramientasIMG, #regaloIMG").on("mouseover", function (el) {
  $(el.currentTarget).css({
    transition: "all 300ms ease-in",
    transform: "scale(1.06)",
  });
});

$("#chimeneaIMG, #herramientasIMG, #regaloIMG").on("mouseleave", function (el) {
  $(el.currentTarget).css({
    transition: "all 300ms ease-in",
    transform: "scale(1)",
  });
});

function validateName() {
  let nameForm = document.getElementById("inputName");

  if (nameForm.value.match(/[^a-zA-Z ]/)) {
    nameForm.classList.add("is-invalid");
  } else {
    nameForm.classList.remove("is-invalid");
  }
}

function validatePhone() {
  let phone = document.getElementById("telephone");

  if (!phone.value.match(/^\+?[1-9][0-9]{7,14}$/)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}

function validateTextArea() {
  let textArea = document.getElementById("message");

  if (textArea.value.length < 2) {
    textArea.classList.add("is-invalid");
  } else {
    textArea.classList.remove("is-invalid");
  }
}

$(document).ready(function () {
    $("#botonForm").click(function () {
        let texto = $(this).text();
      if (texto == 'Abrir Formulario') {
        $(this).text('Cerrar Formulario');
      } else {
        $(this).text('Abrir Formulario');
      }
      $("#contactForm").toggle(1000);
    });
});