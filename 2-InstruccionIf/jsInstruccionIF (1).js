function mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	if(edad==15)//if toma solo el valor false = 0, el resto es true por descarte
	{
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN