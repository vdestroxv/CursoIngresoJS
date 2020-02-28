function mostrar()
{
	var numero;
	var anterior;
	var flag;
	var contador;

	contador=0
	anterior=0;
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);
	for (anterior=2;anterior<numero;anterior++)
	{	
		if (numero%anterior==0)
		{
			flag=0;
			break;
		}
		else
		{
			flag=1;
			break;
		}

	}
	if (flag==1)
	{
		alert("no es primo");
	}
	else
	{
		alert("es primo");
	}
}//FIN DE LA FUNCIÓN