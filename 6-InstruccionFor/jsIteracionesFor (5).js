function mostrar()
{

	var	contador;
	var repetciones;
	contador=0;
	for(;;)
	{		
		repeticiones = prompt("ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
		if(repeticiones==9)
		{
			break;
		}
		console.log(contador);
		contador++;
	}



}//FIN DE LA FUNCIÓN