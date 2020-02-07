/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var porcentaje;
	var sueldoMasAumento

	porcentaje = 10
	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	aumento = porcentaje*sueldo/100;

	sueldoMasAumento=sueldo+aumento

	document.getElementById('resultado').value=sueldoMasAumento;

}
