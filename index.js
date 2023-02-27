// Obtener el formulario
const myForm = document.getElementById("myForm");
const img = document.getElementById("entrada");


// Agregar un evento al formulario cuando se envía
myForm.addEventListener("submit", function(event) {
	event.preventDefault(); // Detener el comportamiento predeterminado del formulario

	// Obtener la selección realizada en el elemento select
	const seleccion = document.getElementById("seleccion").value;

	// Obtener el número seleccionado en el segundo select
	const numero = document.getElementById("numero").value;

	// Generar el código QR utilizando la biblioteca qrcode.js
	const qrString = "Tipo de entrada: " + seleccion + ", número seleccionado: " + numero;
	new QRCode(document.getElementById("qrcode"), qrString);
});

// Agregar un evento al elemento select para actualizar las opciones de número
document.getElementById("seleccion").addEventListener("change", function(event) {
	// Obtener la selección realizada en el elemento select
	const seleccion = event.target.value;

	// Obtener el div donde se mostrarán las opciones de número
	const numeroDiv = document.getElementById("numeroDiv");

	// Eliminar cualquier opción previamente generada
	numeroDiv.innerHTML = "";

	// Crear un nuevo elemento select
	const numeroSelect = document.createElement("select");
	numeroSelect.id = "numero";
	numeroSelect.name = "numero";

	// Agregar las opciones dependiendo de la selección realizada en el primer select
	if (seleccion === "vip") {
		for (let i = 1; i <= 30; i++) {
			img.src = "./src/ENTRADA_ROCK-ON_VIP.png"
			const option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	} else if (seleccion === "consumo") {
		for (let i = 1; i <= 70; i++) {
			img.src = "./src/ENTRADA_ROCK-ON_ESPECIAL.png"
			const option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	} else if (seleccion === "general") {
				for  (let i = 1; i <= 300; i++) {
			img.src = "./src/ENTRADA_ROCK-ON1_GENERAL.png"
			const option = document.createElement("option");
			option.value = i;
			option.text = i;
			numeroSelect.add(option);
		}
	}

	// Agregar el nuevo elemento select al div correspondiente
	numeroDiv.appendChild(numeroSelect);
})

document.getElementById('capture').addEventListener('click', () => {
	html2canvas(document.getElementById('imgs')).then( (canvas) => {
	  // Haz algo con la imagen, como guardarla o mostrarla en la página
	const image = canvas.toDataURL('image/png');

	const link = document.createElement('a');
	link.download = "Entrada.png";
	link.href = image;

	document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
	
	  //   document.body.appendChild(canvas);
	});
  });