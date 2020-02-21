function mostrar()
{

	var contador;
	var acumulador;
	var respuesta='si';
	var numero;
	var suma;
	var promedio;

	contador = 0;
	acumulador = 0;
	while(respuesta=="si")
	{
		numero = prompt("ingrese un numero","ejemplo");
		numero = parseInt(numero);
		contador = contador+1;
		acumulador = acumulador+numero;
		respuesta = prompt("desea ingresar otro numero?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN