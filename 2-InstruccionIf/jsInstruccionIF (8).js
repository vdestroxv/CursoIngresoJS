function mostrar()
{
	var edad;
	var estadocivil;

//tomo la edad  
	edad = document.getElementById('edad').value;
	edad = parseInt(edad);
	estadocivil = document.getElementById('estadoCivil').value;
	if(edad>17 && estadocivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN