function sendToWhatsapp(){
	let number = "+9198XXXXXXXX";

	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	let message = document.getElementById('message').value;
    let subject = document.getElementById('subject').value;

	var url = "https://wa.me/" + 573244420338 + "?text="
	+ "Nombre: " +name+ "%0a"
    + "Asunto: " +subject+ "%0a"
	+ "Correo: " +email+ "%0a"
	+ "Mensaje: " +message+ "%0a";

	window.open(url, '_blank').focus();

}