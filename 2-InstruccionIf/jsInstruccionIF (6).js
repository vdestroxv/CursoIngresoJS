function mostrar()
{
	var edad;
//tomo la edad  
	 edad = document.getElementById('edad').value;
	 edad = parseInt(edad);
	 if(edad<13)
	 {
	 	 	alert("la persona es menor de edad");
	 }
	 else
	 {
	 	if(edad>17)
	 	{
	 		alert("la persona es mayor de edad")
	 	}
	 	else
	 	{
	 		alert("la persona es adolecente")
	 	}
	 }
}//FIN DE LA FUNCIÓN