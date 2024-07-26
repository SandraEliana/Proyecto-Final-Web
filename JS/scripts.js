//--- eventos de JavaScript ---//
//--- Inicializar array datos ---//
const datos = {
	nombre: '',
	celular: '',
	correo: '',
	mensaje: ''
}
nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){

	datos[evento.target.id] = evento.target.value;
	
}


const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	const {nombre, celular, correo, mensaje} = datos;

	if (nombre === '' || celular === '' ||correo === '' ||mensaje === ''){
	
		mostrarError('todos los campos son obligatorios')
		return; 
	}

	mostrarMensaje("Enviando datos correctamente")
	
	
});

function mostrarError(mensaje){

let error = document.createElement('p')
error.textContent = mensaje;
error.classList.add('error');
formulario.appendChild(error);

setTimeout(() =>{
	error.remove();
}, 5000);



}


function mostrarMensaje(mensaje){

let alerta = document.createElement('p')
alerta.textContent = mensaje;
alerta.classList.add('correcto');
formulario.appendChild(alerta);

setTimeout(() =>{
	alerta.remove();
}, 3000);
}