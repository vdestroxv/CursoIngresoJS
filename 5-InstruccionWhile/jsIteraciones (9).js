function mostrar()
{
	// declarar variables
	var contador;
	var respuesta;
	var maximo;
	var minimo;
	var numero;

	contador = 0;
	respuesta = "si";
	minimo = 0;
	maximo = 0;

	while(respuesta!='no')
	{
		contador=contador+1;

		numero= prompt("ingrese otro numero");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero= prompt("ingrese un numero valido");
			numero=parseInt(numero);
		}

		if (contador==1)
		{
			minimo = numero;
			maximo = numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo = numero;
			}
			else
			{
				if(numero<minimo)
					minimo = numero;
			}
		}
		respuesta = prompt("desea ingresar otro numero?");
	}
	document.getElementById('minimo').value=minimo;
	document.getElementById('maximo').value=maximo;
}//FIN DE LA FUNCIÓN