function mostrar()
{

	var contador;
	var positivos;//suma de positivos
	var negativos;//suma de negativos
	var totalpositivos;//total de positivos
	var totalnegativos;//total de negativos
	var totalpares;//total de pares
	var totalceros;//total de ceros
	var promediopositivos;//positivos/totalpositivos
	var promedionegativos;//negativos/totalnegativos
	var diferenciapositivos_negtivos;//positivos - negativos
	var numero;
	var ecuaciondeceros;
	//declarar contadores y variables 
	contador = 0;
	positivos = 0;
	negativos = 0;
	totalpositivos = 0;
	totalnegativos = 0;
	totalceros = 0;
	totalpares = 0;

	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero; ");
		numero=parseInt(numero);
		ecuaciondeceros=numero%2;

		if(numero==0)
		{
			totalceros=totalceros+1;
		}
		if(numero%2==0)
		{
			totalpares=totalpares+1;
		}

		if(numero>0)
		{
			positivos=positivos+numero;
			totalpositivos=totalpositivos+1;
			console.log("positivos"+positivos);
			console.log("totalpositivos"+totalpositivos);
		}
		else
		{
			if(numero<0)
			{
				negativos=negativos+numero;
				totalnegativos=totalnegativos+1;
				console.log("negativos"+negativos);
				console.log("totalnegativos"+totalnegativos);

			}
		}
		respuesta=prompt("desea ingresar otro numero? ");
	}

	diferenciapositivos_negtivos=positivos - negativos;
	promedionegativos=negativos/totalnegativos;
	promediopositivos=positivos/totalpositivos;
	console.log("promediopositivos "+promediopositivos);
	console.log("promedionegativos "+promedionegativos);
	console.log("diferenciapositivos_negtivos "+diferenciapositivos_negtivos);
}//FIN DE LA FUNCIÓN