function mostrar()
{
	var i;
	var numeroingresado;
	var bandera;

	bandera=0;
	numeroingresado = prompt("ingrese un numero");
	numeroingresado = parseInt(numeroingresado);

	for(i=2;i>numeroingresado;i++)
	{
		if(numeroingresado%i==0)
		{
			bandera=1;
		}
	}
	if(bandera!=1)
	{
		alert(numeroingresado+" es primo")
	}

}//FIN DE LA FUNCIÓN