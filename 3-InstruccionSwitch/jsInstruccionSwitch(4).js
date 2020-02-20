function mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 dias")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 dias")
			break;
		default:
			alert("tiene 31 dias")
			break;
	}
//alert (mesDelAño);
	
	


//31 28 31 30 31 30 31 31 30 31 30 31
}//FIN DE LA FUNCIÓN