// Obtener el formulario
var myForm = document.getElementById("myForm");

// Agregar un evento al formulario cuando se envía
myForm.addEventListener("submit", function(event) {
	event.preventDefault(); // Detener el comportamiento predeterminado del formulario

	// Obtener la selección realizada en el elemento select
	var seleccion = document.getElementById("seleccion").value;

	// Obtener el número seleccionado en el segundo select
	var numero = document.getElementById("numero").value;

	// Generar el código QR utilizando la biblioteca qrcode.js
	var qrString = "Tipo de entrada: " + seleccion + ", número seleccionado: " + numero;
	new QRCode(document.getElementById("qrcode"), qrString);
});

// Agregar un evento al elemento select para actualizar las opciones de número
document.getElementById("seleccion").addEventListener("change", function(event) {
	// Obtener la selección realizada en el elemento select
	var seleccion = event.target.value;

	// Obtener el div donde se mostrarán las opciones de número
	var numeroDiv = document.getElementById("numeroDiv");

	// Eliminar cualquier opción previamente generada
	numeroDiv.innerHTML = "";

	// Crear un nuevo elemento select
	var numeroSelect = document.createElement("select");
	numeroSelect.id = "numero";
	numeroSelect.name = "numero";

	// Agregar las opciones dependiendo de la selección realizada en el primer select
	if (seleccion === "vip") {
		for (var i = 1; i <= 30; i++) {
			var option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	} else if (seleccion === "consumo") {
		for (var i = 1; i <= 70; i++) {
			var option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	} else if (seleccion === "general") {
				for (var i = 1; i <= 300; i++) {
			var option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	}

	// Agregar el nuevo elemento select al div correspondiente
	numeroDiv.appendChild(numeroSelect);
})