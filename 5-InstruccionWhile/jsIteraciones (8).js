function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var suma;
	var producto;
	var numero;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numero = prompt("ingrese un numero","ejemplo");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
			numero = prompt("ingrese un numero","ejemplo");
			numero = parseInt(numero);
		}
		contador = contador+1;
		
		if(numero>0)
		{
			positivo = positivo+numero;
		}
		else
		{
			if (numero<0)
			{
				negativo = negativo*numero;
			}

		}
		respuesta = prompt("desea ingresar otro numero?","si/no");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN