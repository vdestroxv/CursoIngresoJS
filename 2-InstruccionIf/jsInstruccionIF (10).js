function mostrar()
{
	var numerorandom;
	//Genero el número RANDOM entre 1 y 10 
	numerorandom = Math.floor(Math.random() * 10) + 1;
	if(numerorandom>8)
	{
		console.log("EXCELENTE"+numerorandom);
	}
	else
	{
		if(numerorandom>3)
		{
			console.log("APROBÓ"+numerorandom);
		}
		else
		{
			console.log("Vamos, la proxima se puede"+numerorandom );
		}
	}

}//FIN DE LA FUNCIÓN