function mostrar()
{

	var contador;
	var acumulador;
	var numero;
	var suma;
	var promedio;

	contador = 0;
	acumulador = 0;


	while(contador<5)
	{
		numero = prompt("ingrese un numero","ejemplo");
		numero = parseInt(numero);
		while (isNaN(numero))
		{
			numero = prompt("ingrese un numero","ejemplo");
			numero = parseInt(numero);
		}
		contador = contador+1;
		acumulador = acumulador+numero;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN