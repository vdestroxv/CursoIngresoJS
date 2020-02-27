function mostrar()
{
	var numero;
	var numeropar;

	numero=prompt("ingrese un numero ");
	numero=parseInt(numero);

	for (numeropar=0;numeropar<numero+1;)
	{
		console.log(numeropar);
		numeropar=numeropar+2;
	}



}//FIN DE LA FUNCIÓN