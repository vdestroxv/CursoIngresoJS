/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var descuento;
	var importeMenosDescuento;

	importe = document.getElementById('importe').value;
	importe = parseInt(importe);
	
	porcentaje = 25;
	descuento = porcentaje * importe / 100;

	importeMenosDescuento = importe - descuento;

	document.getElementById('resultado').value=importeMenosDescuento;

}
