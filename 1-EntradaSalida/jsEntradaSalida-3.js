/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;
	//html es el documento, 
	//value es el valor del cuadro de texto
	alert(nombre);
	//document.getElementById('elNombre').value="nombre"; sirve para ingresar el valor al cuadro de texto
}


